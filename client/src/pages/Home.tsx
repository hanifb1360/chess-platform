import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ChessBoard from "../components/ChessBoard";
import { Typography, Container, Box } from "@mui/material";

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

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
