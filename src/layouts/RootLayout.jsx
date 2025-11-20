import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import Home from "../Pages/Home/Home";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet>
      </Outlet>
      <Footer />
    </div>
  );
};

export default RootLayout;
