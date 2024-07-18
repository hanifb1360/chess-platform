import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Typography, Box, TextField, Button } from "@mui/material";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <TextField
        fullWidth
        label="Username"
        value={user.username}
        margin="normal"
        variant="outlined"
        disabled
      />
      <TextField
        fullWidth
        label="Email"
        value={user.email}
        margin="normal"
        variant="outlined"
        disabled
      />
      <Button variant="contained" color="primary">
        Edit Profile
      </Button>
    </Box>
  );
};

export default Profile;
