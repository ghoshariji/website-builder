import React from "react";
import Header1 from "../component/Header1";
import Header2 from "../component/Header2";
import Header from "../component/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../component/Header3";

import ContactPage from "../component/Header4";
import Mobile from "../component/Mobile";
import Website from "../component/Website";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header1 />
      <Header />
      <Mobile />
      <Header2 />
      
      <Website />
      <Accordion />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Landing;
