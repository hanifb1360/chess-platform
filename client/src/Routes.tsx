import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/' element={<Navigate to='/register' replace />} />
    </Switch>
  </Layout>
);

export default Routes;
