import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import AppRoutes from "./AllRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={AppRoutes} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
