import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../graphql/mutations";
import { setUser } from "../redux/userSlice";

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
    <form onSubmit={handleSubmit}>
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
        Login
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Login successful!</p>}
    </form>
  );
};

export default Login;
