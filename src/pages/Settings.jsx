import "../css/settings.css";
import { Link } from "react-router-dom";

const Settings = () => {

  return (
    <div className="settings">
      <h1 className="settings-heading">Settings</h1>
      <div className="info">
        <h2>ACCOUNT INFO</h2>
        <h1>email : gmail</h1>
        <h1>joined : 21 april</h1>
      </div>
      <div className="security">
        <h2>SECURITY</h2>
        <div className="box">
          <h1>Change Password</h1>
        </div>
        <div className="box">
          <h1>
            <Link to={`/console/ususu/settings/passwordless`}>
              Passwordless Login
            </Link>
          </h1>
          <span>{`disabled`}</span>
        </div>
        <div className="box">
          <h1>
            <Link to={`/console/ddd/settings/twofactorauth`}>
              Two Factor Authentication
            </Link>
          </h1>
          <span>{`disabled`}</span>
        </div>
      </div>
      <div className="danger">
        <h2>ACCOUNT MANAGMENT</h2>
        <div className="box">
          <h1>
            {" "}
            <Link to={`/console/settings/code`}>recovery code</Link>
          </h1>
        </div>
        <div className="box">
          <h1>
            {" "}
            <button>
              download login info
            </button>
          </h1>
        </div>
        <div className="box">
          <h1 >delete account</h1>
        </div>
          <div className="box">
            <h1>delete all forms</h1>
            <p>forms cannot be deleted once deleted</p>
            <button>delete form</button>
          </div>
        <div className="box">
          <button className="logout">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
