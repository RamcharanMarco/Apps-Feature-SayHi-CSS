import '../css/pwd-reset-code.css'

const PasswordResetSendCode = () => {
  return (
    <div className="pwd-reset-code">
        <h1>send pwd reset code</h1>
        <input type="text" placeholder='email'/>
        <button>send email</button>
        <button>resend email</button>
    </div>
  )
}

export default PasswordResetSendCode