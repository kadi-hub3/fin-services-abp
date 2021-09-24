import React from "react";
import Hero from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/Info";
import Services from "../components/Services/Services";

import {
  homeObject,
  homeObjectThree,
  homeObjectTwo,
} from "../components/InfoSection/Data";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...homeObject} />
      <InfoSection {...homeObjectTwo} />
      <Services />
      <InfoSection {...homeObjectThree} />
    </>
  );
};

export default Home;
