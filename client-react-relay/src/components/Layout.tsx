import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <Container>{children}</Container>
  </>
);

export default Layout;
