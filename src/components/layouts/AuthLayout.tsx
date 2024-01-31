import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <nav>user navbar</nav>
      <Outlet />
      <footer>user footer</footer>
    </div>
  );
};

export default AuthLayout;
