import React from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const result = await login({ variables: formData });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Email'
                margin='normal'
                variant='outlined'
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Password'
                margin='normal'
                variant='outlined'
                type='password'
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
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
        <Box sx={{ mt: 2 }}>
          <Typography>
            Don't have an account? <Link to='/register'>Register here</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
