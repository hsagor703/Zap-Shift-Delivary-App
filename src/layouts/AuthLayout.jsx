import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import auth from "../assets/authImage.png";
import Login from "../Pages/Auth/Login";
const AuthLayout = () => {
  return (
    <div className="container mx-auto ">
      <Logo></Logo>
      <div className="md:flex  items-center justify-center ">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 min-h-[calc(100vh-100px)] bg-[#fafdf0]   flex items-center">
          <img src={auth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
