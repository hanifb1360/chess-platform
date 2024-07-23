import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useSubscription } from "@apollo/client";
import { Chessboard } from "react-chessboard";
import { MAKE_MOVE } from "../graphql/mutations";
import { GAME_UPDATED } from "../graphql/subscriptions";
import { updateGameState } from "../redux/gameSlice";
import { RootState } from "../redux/store";
import { ChessEngine } from "../utils/chessEngine";
import { BoardState, Square } from "../types/chess";
import customPieces from "../utils/pieces";

const engine = new ChessEngine();

const ChessBoard: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [boardState, setBoardState] = useState<BoardState>(
    engine.getBoardState()
  );

  const [makeMove] = useMutation(MAKE_MOVE);
  const { data: subscriptionData } = useSubscription(GAME_UPDATED, {
    variables: { gameId: gameState.id },
  });

  useEffect(() => {
    if (subscriptionData) {
      dispatch(updateGameState(subscriptionData.gameUpdated));
    }
  }, [subscriptionData, dispatch]);

  const handleMove = (sourceSquare: Square, targetSquare: Square): boolean => {
    const move = `${sourceSquare}${targetSquare}`;
    console.log("Sending move:", move);

    makeMove({
      variables: {
        gameId: gameState.id,
        move,
      },
    })
      .then(() => {
        console.log("Move successful");
        setBoardState(engine.getBoardState()); // Update the board state after a move
      })
      .catch((error) => {
        console.error("Error making move:", error);
      });

    // Since we don't know the result of the move immediately, we assume it's valid for now.
    // In a real application, you might want to return false if the move is invalid.
    return true;
  };

  return (
    <div>
      <div>Current Turn: {engine.getCurrentTurn()}</div>
      <Chessboard
        position={boardState}
        onPieceDrop={(
          sourceSquare: Square,
          targetSquare: Square,
          piece: string
        ) => {
          const result = handleMove(sourceSquare, targetSquare);
          return result;
        }}
        customPieces={customPieces}
      />
    </div>
  );
};

export default ChessBoard;
