import { Product } from "../types/Product";
import {
  AppActions,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_BEGIN
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store";

export const getProductsBegin = (loading:boolean): AppActions => ({
  type: GET_PRODUCTS_BEGIN,
  loading
});
export const getProductsSuccess = (products: Product[]): AppActions => ({
  type: GET_PRODUCTS_SUCCESS,
  products
});
export const getProductsFail = (error: string): AppActions => ({
  type: GET_PRODUCTS_FAIL,
  error
});

export const getProducts = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(getProductsBegin(true))
    fetch(
      "https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products"
    )
      .then(response => response.json())
      .then(response => {
        dispatch(getProductsSuccess(response.body));
      })
      .catch(error => {
        dispatch(getProductsFail(error.toString()));
      });
  };
};
