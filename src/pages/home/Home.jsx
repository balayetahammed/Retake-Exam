import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Bannar from "../../components/banner/Bannar";
import About from "../../components/about/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bannar />
      <About />
    </>
  );
};

export default Home;
