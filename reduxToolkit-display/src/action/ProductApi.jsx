import axios from "axios";
import { getProduct } from "../store/reducers/ProductReducer";
export const asyncApiCall = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProduct(response.data));
  } catch (error) {
    console.log(error);
  }
};
