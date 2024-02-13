import "../css/pwd-reset.css";

const PasswordReset = () => {
  return (
    <div className="pwd-reset">
      <div className="content">
        <h1>Reset Password</h1>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="email" />
        <button>resend email</button>
      </div>
    </div>
  );
};

export default PasswordReset;
