import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import ChessBoard from "../components/ChessBoard";
import { Typography, Container, Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { START_GAME } from "../graphql/mutations";
import { setGameState } from "../redux/gameSlice";

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const [startGame, { error: startGameError }] = useMutation(START_GAME);

  const initializeGame = useCallback(async () => {
    if (user.token && user.id && !gameState.id) {
      try {
        const { data } = await startGame({
          variables: {
            whiteId: user.id, // Assuming logged-in user is white player
            blackId: "someBlackPlayerId", // Replace with actual black player ID
          },
        });
        console.log("startGame response:", data);
        if (data && data.startGame) {
          dispatch(setGameState(data.startGame));
        } else {
          console.error("Failed to start game: No data returned");
        }
      } catch (error) {
        console.error("Error starting game:", error);
      }
    }
  }, [user.token, user.id, gameState.id, startGame, dispatch]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (startGameError) {
      console.error("GraphQL Error starting game:", startGameError);
    }
  }, [startGameError]);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Welcome to the Chess Platform
        </Typography>
        {user && user.token ? (
          <ChessBoard />
        ) : (
          <Typography variant='h6' color='textSecondary'>
            Please log in to play chess.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Home;
