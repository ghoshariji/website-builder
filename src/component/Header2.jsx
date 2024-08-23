

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "../css/Header2.css";

const Header2 = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      <div className="title">
        <h1> <b>Whatever <span style={{color:"green"}}> website you'll build, </span> it'll look good.</b></h1>
      </div>
      <div>
        <Marquee pauseOnHover={!isPaused} play={!isPaused} direction="left" speed={100} delay={5}>
          <div className="image-wrapper">
            <img src="public/responsive image.png" alt="Responsive Design" />
          </div>

          <div className="image-wrapper">
            <img src="public/Ecommerce.jpg" alt="Ecommerce" />
          </div>

          <div className="image-wrapper">
            <img src="public/Blogging.webp" alt="Blogging" />
          </div>

          <div className="image-wrapper">
            <img src="public/Job-portal.jpg" alt="Job Portal" />
          </div>

          <div className="image-wrapper">
            <img src="public/portfolio.jpg" alt="Portfolio" />
          </div>

          <div className="image-wrapper">
            <img src="public/Tiket.jpg" alt="Ticketing System" />
          </div>
        </Marquee>
      </div>


    {/**   <div className="title">
        <h1 style={{marginTop:"6rem" }}> <b> <span style={{color:"green"}}> Organizations</span></b> that trust us.</h1>
      </div>
      <div>
        <Marquee pauseOnHover={!isPaused} play={!isPaused} direction="right" speed={100} delay={5}>
          <div className="image-wrapper-1">
            <img src="public/one.png" alt="Company 1" />
          </div>

          <div className="image-wrapper-1">
            <img src="public/Boeing.png" alt="Boeing" />
          </div>

          <div className="image-wrapper-1">
            <img src="public/cisco.png" alt="Cisco" />
          </div>

          <div className="image-wrapper-1">
            <img src="public/Penn.png" alt="Penn" />
          </div>

          <div className="image-wrapper-1">
            <img src="public/seven.png" alt="Company 7" />
          </div>

          <div className="image-wrapper-1">
            <img src="public/ten.png" alt="Company 10" />
          </div>
        </Marquee>
      </div>**/}


      <div className="controls">
        <button onClick={togglePause}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>

     
    </div>
  );
};

export default Header2;

