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
      <div>
        <div>
          <h1>Free Forver</h1>
          <p>TRUENDO Essentials is free to use for as long as you like. Sign up now without credit card.</p>
          <a href="">signup</a>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.X8Qo3a7S48RuYz6sM0aGngAAAA?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
      <div>
        <h1>the dashboard</h1>
        <p>where you can manage ur forms and customize them</p>
        <div>
          <div>
            <h1>forms</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, voluptates?</p>
          </div>
          <div>
            <h1>customization</h1>
            <p>dkdjsjdjjdjdj</p>
          </div>
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

