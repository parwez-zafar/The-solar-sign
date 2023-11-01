import React from "react";

import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import SignUp from "../Components/SignUpSignin/SignUp";
import SignIn from "../Components/SignUpSignin/SignIn";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Brands /> */}
      <Brands />
    </React.Fragment>
  );
};

export default Home;
