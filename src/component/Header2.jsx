import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "../css/Header2.css";
import a from "../assets/responsive image.png";
import b from "../assets/Ecommerce.jpg";
import c from "../assets/Blogging.webp";
import d from "../assets/Job-portal.jpg";
import e from "../assets/portfolio.jpg";
import f from "../assets/Tiket.jpg";
import l from "../assets/one.png";
import g from "../assets/Boeing.png";
import h from "../assets/cisco.png";
import i from "../assets/Penn.png";
import j from "../assets/seven.png";
import k from "../assets/ten.png";

const Header2 = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div >
    <div className="App" style={{ overflowX: "hidden" }}>
      <div className="title">
        <h1 style={{padding:'2px',margin:'2px'}}>
          <b>
            Whatever <span style={{ color: "green" }}>website you'll build,</span> it'll look good.
          </b>
        </h1>
      </div>
      <div>
        <Marquee direction="left" speed={100} delay={2} pauseOnHover={!isPaused} play={!isPaused}>
          <div className="image-wrapper">
            <img src={a} alt="Responsive Design" />
          </div>

          <div className="image-wrapper">
            <img src={b} alt="Ecommerce" />
          </div>

          <div className="image-wrapper">
            <img src={c} alt="Blogging" />
          </div>

          <div className="image-wrapper">
            <img src={d} alt="Job Portal" />
          </div>

          <div className="image-wrapper">
            <img src={e} alt="Portfolio" />
          </div>

          <div className="image-wrapper">
            <img src={f} alt="Ticketing System" />
          </div>
        </Marquee>
      </div>

      {/** Commented-out second Marquee for reference, this can be uncommented and used if needed
      <div className="title" style={{ marginTop: "6rem" }}>
        <h1>
          <b>
            <span style={{ color: "green" }}>Organizations</span> that trust us.
          </b>
        </h1>
      </div>
      <div>
        <Marquee pauseOnHover={!isPaused} play={!isPaused} direction="right" speed={100} delay={2}>
          <div className="image-wrapper-1">
            <img src={l} alt="Company 1" />
          </div>

          <div className="image-wrapper-1">
            <img src={g} alt="Boeing" />
          </div>

          <div className="image-wrapper-1">
            <img src={h} alt="Cisco" />
          </div>

          <div className="image-wrapper-1">
            <img src={i} alt="Penn" />
          </div>

          <div className="image-wrapper-1">
            <img src={j} alt="Company 7" />
          </div>

          <div className="image-wrapper-1">
            <img src={k} alt="Company 10" />
          </div>
        </Marquee>
      </div>**/}

      <div className="controls">
        <button onClick={togglePause}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header2;
