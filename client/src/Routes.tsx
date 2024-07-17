import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
