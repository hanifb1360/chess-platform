import React from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

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
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const dispatch = useDispatch();

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const result = await register({ variables: formData });
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
