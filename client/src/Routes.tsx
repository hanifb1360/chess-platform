import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const Routes: React.FC = () => (
  <Switch>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Navigate to='/register' replace />} />
  </Switch>
);

export default Routes;
