import React from "react";
import '../css/home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="home">
    <div className="banner">
      <h1>HIT.ME.UP</h1>
      <Link to='/login'>Get Started</Link>
    </div>
    <div className="banner2">
      <p>Emailing service for your website</p>
    </div>
    <div className="features">
      <h1 className="heading">
        Features
      </h1>
      <div className="container">
        <div className="box">
          <div className="content">
            <p>reply email</p>
          </div>
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
