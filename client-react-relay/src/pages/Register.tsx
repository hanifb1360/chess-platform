import React from "react";
import { useMutation } from "react-relay";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../graphql/mutations/RegisterMutation";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RegisterMutation } from "../graphql/mutations/__generated__/RegisterMutation.graphql";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const [commit, isInFlight] = useMutation<RegisterMutation>(REGISTER_USER);
  const dispatch = useDispatch();

  const onSubmit = (formData: RegisterFormData) => {
    commit({
      variables: formData,
      onCompleted: (response) => {
        if (response.register) {
          const { user, token } = response.register;
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
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Username'
                margin='normal'
                variant='outlined'
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Email'
                margin='normal'
                variant='outlined'
                type='email'
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
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
            Register
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Typography>
            Already have an account? <Link to='/login'>Login here</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
