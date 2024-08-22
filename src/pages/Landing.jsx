import React from "react";
import Header1 from "../component/Header1";
import Header2 from "../component/Header2";
import Header from "../component/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../component/Header3";

import ContactPage from "../component/Header4";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header1 />
      <Header />
      <Header2 />
      <Accordion />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Landing;
