import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";

const Root = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Root;
