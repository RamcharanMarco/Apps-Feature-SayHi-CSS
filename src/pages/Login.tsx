import React from "react";
import "../css/login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <a href="">forgot password</a>
        <button>continue</button>
        <div className="error">
          <p>error</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
