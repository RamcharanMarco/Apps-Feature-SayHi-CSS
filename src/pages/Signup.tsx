import React from "react";
import "../css/signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h1>SIGNUP</h1>
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button>signup</button>
        <div className="error">
          <p>error</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
