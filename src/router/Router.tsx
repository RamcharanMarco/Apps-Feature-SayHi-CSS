import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalTest from "../pages/ModalTest";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/modal_test" element={<ModalTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
