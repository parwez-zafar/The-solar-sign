import axios from "axios";
import {
  getProducts as getProductsAction,
  getProductDetails as getProductDetailsAction,
  getCart as getCartAction
} from "../storeSlice";

export const getAllProducts = () => async (dispatch) => {
  try {
    // console.log("register data user action", userData);
    const getAllProducts = await axios.get(
      "https://printsigns.onrender.com/api/product/getAll/"
    );
    // console.log(registerUser);
    if (!getAllProducts) {
      return false;
    } else {
      const productsData = getAllProducts.data;
      //   console.log(registerData);
      dispatch(getProductsAction(productsData));
      return true;
    }
  } catch (error) {
    console.log("error in getAllProducts action", error.message);
  }
};

export const getSingleProductDetails = (id) => async (dispatch) => {
  // console.log("id from action", id);
  try {
    const getSingleProductDetails = await axios.get(
      `https://printsigns.onrender.com/api/product/getOne/${id}`
    );

    if (!getSingleProductDetails) {
      return false;
    } else {
      const productsDetailsData = getSingleProductDetails.data.product;
      dispatch(getProductDetailsAction(productsDetailsData));
      return true;
    }
  } catch (error) {
    console.log("error in getAllProducts action", error.message);
  }
};

export const getCartItem = () => async (dispatch) => {
  try {
    const cartItemString = localStorage.getItem('cart');
    if (!cartItemString) {

      return false;
    } else {
      const cartItems = JSON.parse(cartItemString);

      dispatch(getCartAction(cartItems));

      return true;
    }
  }
  catch (error) {
    console.log("error in getAllProducts action", error.message);

  }
}
