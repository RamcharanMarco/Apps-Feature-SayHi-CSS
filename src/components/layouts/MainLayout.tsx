import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from '../navbar/MainNavbar'

const MainLayout = () => {
  return (
    <div>
      <MainNavbar/>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
