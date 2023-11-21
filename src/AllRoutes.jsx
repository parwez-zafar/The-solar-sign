import React from "react";
import Home from "./Pages/Home";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Components/Root";
import SignIn from "./Components/SignUpSignin/SignIn";
import SignUp from "./Components/SignUpSignin/SignUp";

import ProductDetails from "./Components/ProductDetails";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Products from "./Components/Product/Products";

const AllRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/product/category/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* <Route path="product-details" element={<ProductDetails />} /> */}
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </>
  )
);

export default AllRoutes;
