import axios from "axios";
import { getProducts as getProductsAction } from "../storeSlice";

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
