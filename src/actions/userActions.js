import axios from "axios";
import {
  CLEAR_ERRORS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstants";

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const data = await axios.post(
      "https://solar-sign-backend.onrender.com/api/customer/register",
      user
    );
    console.log(data);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: REGISTER_USER_FAIL, payload: err.response.data.message });
  }
};
// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
