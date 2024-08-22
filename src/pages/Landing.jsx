import React from "react";
import Header1 from "../component/Header1";
import Header2 from "../component/Header2";
import Header from "../component/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../component/Header3";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header1 />
      <Header />
      <Header2 />
      <Accordion />
      <Footer />
    </>
  );
};

export default Landing;
