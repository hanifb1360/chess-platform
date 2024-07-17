import React from "react";
import { Typography, Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant='h2'>Welcome to the Chess App</Typography>
    </Box>
  );
};

export default Home;
