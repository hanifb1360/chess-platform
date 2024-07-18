import React from "react";
import { useMutation } from "react-relay";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../graphql/mutations/LoginMutation";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { LoginMutation } from "../graphql/mutations/__generated__/LoginMutation.graphql";

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
  const [commit, isInFlight] = useMutation<LoginMutation>(LOGIN_USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData: LoginFormData) => {
    commit({
      variables: formData,
      onCompleted: (response) => {
        if (response.login) {
          const { user, token } = response.login;
          dispatch(
            setUser({
              id: user.id,
              username: user.username,
              email: user.email,
              token,
            })
          );
          navigate("/profile"); // Navigate to profile on successful login
        }
      },
      onError: (err) => {
        console.error(err);
      },
    });
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
            disabled={isInFlight}
          >
            Login
          </Button>
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
