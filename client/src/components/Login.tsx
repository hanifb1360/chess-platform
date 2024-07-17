import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ variables: { email, password } });
      if (result.data) {
        const { user, token } = result.data.login;
        dispatch(
          setUser({
            id: user.id,
            username: user.username,
            email: user.email,
            token,
          })
        );
        // Handle successful login (e.g., store token, redirect)
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
            Login
          </Button>
          {error && (
            <Typography color='error'>Error: {error.message}</Typography>
          )}
          {data && <Typography color='primary'>Login successful!</Typography>}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
