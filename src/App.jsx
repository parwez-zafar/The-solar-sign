import "./App.css";
import Home from "./Pages/Home";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Components/Root";
import SignIn from "./Components/SignUpSignin/SignIn";
import SignUp from "./Components/SignUpSignin/SignUp";
import React from "react";
import AuthForm from "./Pages/AuthForm";
import ProductDetails from "./Components/ProductDetails";
import Account from "./Pages/Account.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="account" element={<Account />} />

        <Route path="authform" element={<AuthForm />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </React.Fragment>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
