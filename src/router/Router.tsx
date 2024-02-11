import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import Console from "../pages/Console";
import Form from "../pages/Form";
import Settings from "../pages/Settings";
import PasswordResetSendCode from "../pages/PasswordResetSendCode";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pwd/reset/send-code" element={<PasswordResetSendCode />} />
          <Route path="/console/user_id" element={<Console />} />
          <Route path="/console/user_id/forms/form_id" element={<Form />} />
          <Route path="/console/user_id/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
