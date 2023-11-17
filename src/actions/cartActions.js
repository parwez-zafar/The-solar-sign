import axios from "axios";

import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartContants";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {},
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
