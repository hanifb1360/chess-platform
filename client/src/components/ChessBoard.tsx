import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useSubscription } from "@apollo/client";
import Chessboard from "chessboardjsx";
import { MAKE_MOVE } from "../graphql/mutations";
import { GAME_UPDATED } from "../graphql/subscriptions";
import { updateGameState } from "../redux/gameSlice";
import { RootState } from "../redux/store";

const ChessBoard: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);

  const [makeMove] = useMutation(MAKE_MOVE);
  const { data: subscriptionData } = useSubscription(GAME_UPDATED, {
    variables: { gameId: gameState.id },
  });

  useEffect(() => {
    if (subscriptionData) {
      dispatch(updateGameState(subscriptionData.gameUpdated));
    }
  }, [subscriptionData, dispatch]);

  const handleMove = async (sourceSquare: string, targetSquare: string) => {
    try {
      await makeMove({
        variables: {
          gameId: gameState.id,
          move: `${sourceSquare}${targetSquare}`,
        },
      });
    } catch (error) {
      console.error("Error making move:", error);
    }
  };

  return (
    <Chessboard
      position={gameState.fen}
      onDrop={({ sourceSquare, targetSquare }) =>
        handleMove(sourceSquare, targetSquare)
      }
    />
  );
};

export default ChessBoard;
