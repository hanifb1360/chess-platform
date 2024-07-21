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

  useEffect(() => {
    console.log("Current gameState:", gameState); // Debugging line
  }, [gameState]);

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
    console.log("handleMove called with:", sourceSquare, targetSquare);
    const move = `${sourceSquare}${targetSquare}`;
    console.log("Sending move:", move);

    if (!gameState.id) {
      console.error("Error: gameId is missing");
      return; // Prevent the mutation call if gameId is invalid
    }

    try {
      await makeMove({
        variables: {
          gameId: gameState.id,
          move,
        },
      });
      console.log("Move successful");
    } catch (error) {
      console.error("Error making move:", error);
    }
  };

  return (
    <Chessboard
      position={gameState.fen}
      onDrop={({ sourceSquare, targetSquare }) => {
        console.log("onDrop event:", sourceSquare, targetSquare);
        handleMove(sourceSquare, targetSquare);
      }}
    />
  );
};

export default ChessBoard;
