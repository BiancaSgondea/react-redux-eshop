import { Product } from "../types/Product";
import {
  AppActions,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_BEGIN
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store";

export const getProductsBegin = (message: string): AppActions => ({
  type: GET_PRODUCTS_BEGIN,
  payload: message
});
export const getProductsSuccess = (products: Product[]): AppActions => ({
  type: GET_PRODUCTS_SUCCESS,
  products
});
export const getProductsFail = (error: string): AppActions => ({
  type: GET_PRODUCTS_FAIL,
  payload: error
});

export const getProducts = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    fetch(
      "https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products"
    )
      .then(response => response.json())
      .then(response => {
        dispatch(getProductsSuccess(response.body));
        console.log(response);
      })
      .catch(error => {
        dispatch(getProductsFail(error.toString()));
      });
  };
};
