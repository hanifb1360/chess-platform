import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await register({
        variables: { username, email, password },
      });
      if (result.data) {
        const { user, token } = result.data.register;
        dispatch(
          setUser({
            id: user.id,
            username: user.username,
            email: user.email,
            token,
          })
        );
        // Handle successful registration (e.g., redirect, show message)
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin='normal'
            variant='outlined'
          />
          <TextField
            fullWidth
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
            variant='outlined'
            type='email'
          />
          <TextField
            fullWidth
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            variant='outlined'
            type='password'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={loading}
          >
            Register
          </Button>
          {error && (
            <Typography color='error'>Error: {error.message}</Typography>
          )}
          {data && (
            <Typography color='primary'>Registration successful!</Typography>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Register;
