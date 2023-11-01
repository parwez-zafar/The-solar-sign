import React from "react";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import ServicesCard from "../Components/ServicesCard/ServicesCard";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Brands />
      <ServicesCard />
    </React.Fragment>
  );
};

export default Home;
