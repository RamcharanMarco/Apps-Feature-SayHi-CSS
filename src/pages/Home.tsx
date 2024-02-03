import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>HITMEUP</h1>
        <p> Emailing solution for your website</p>
        <a href="signup now">signup now</a>
      </div>
      <div className="free">
        <div className="box-left">
          <h1>Free Forver</h1>
          <p>
            TRUENDO Essentials is free to use for as long as you like. Sign up
            now without credit card.
          </p>
          <a href="">signup</a>
        </div>
        <div className="box-right">
          <img
            src="https://th.bing.com/th/id/OIP.X8Qo3a7S48RuYz6sM0aGngAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
      </div>
      <div className="market">
        <h1>the dashboard</h1>
        <p>where you can manage ur forms and customize them</p>
        <div className="container">
          <div className="box">
            <h1>forms</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, voluptates?
            </p>
          </div>
          <div className="box">
            <h1>customization</h1>
            <p>dkdjsjdjjdjdj</p>
          </div>
          <div className="box">
            <h1>account</h1>
            <p>
              manage your account, with security ffeatures such as 2 factor auth
              and passwordles signup
            </p>
          </div>
        </div>
        <a href="">signup</a>
      </div>
      <div className="steps">
        <h1>Get a Contact form in minutes</h1>
        <div className="container">
          <div className="box">
            <h1>1.one step signup</h1>
            <p>Get free access to HITMEUP core features in just a minute.</p>
          </div>
          <div className="box">
            <h1>2.Optional customization</h1>
            <p>Adjust the look and feel of your forms now or later.</p>
          </div>
          <div className="box">
            <h1>3.Easy implementation</h1>
            <p>
              Just copy and paste our code onto your website then you're set!
            </p>
          </div>
        </div>
        <a href="">signup</a>
      </div>
      <div className="features">
        <h1>features</h1>
        <div className="container">
          <div className="box">
            <h1>Customization</h1>
            <p>
              The color scheme of our cookie manager and cookie banner, as well
              as button colors and size can be changed to match the corporate
              identity of your organization, maintaining a seamless look on your
              website.
            </p>
          </div>
          <div className="box">
            <h1>Advanced customization</h1>
            <p>
              You get a choice of 5 banner designs, and you can choose to remove
              the TRUENDO logo from your banner.
            </p>
          </div>
          <div className="box">
            <h1>Multilingual</h1>
            <p>
              The TRUENDO CMP is now available in 31 languages - covering all EU
              countries and its major trading partners.
            </p>
          </div>
          <div className="box">
            <h1>Access management</h1>
            <p>
              Invite and manage multiple users in your account and grant them
              access to projects and businesses.
            </p>
          </div>
          <div className="box">
            <h1>Automation</h1>
            <p>Send automated reply emails when someone contacts you</p>
          </div>
          <div className="box">
            <h1>Custom email</h1>
            <p>Use your email as the sender as opossed to ours</p>
          </div>
          <div className="box">
            <h1>Login Database</h1>
            <p>All your login history is saved, which can then be downloaded in the settings page.</p>
          </div>
          <div className="box">
            <h1>Multiple Integrations</h1>
            <p>Integrations for all types of forms</p>
          </div>
          <div className="box">
            <h1>Live Edit Preview</h1>
            <p>See how your form looks as you customize it</p>
          </div>
        </div>
        <a href="">signup now</a>
      </div>
    </div>
  );
};

export default Home;
