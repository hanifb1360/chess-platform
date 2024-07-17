import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit' disabled={loading}>
        Register
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Registration successful!</p>}
    </form>
  );
};

export default Register;
