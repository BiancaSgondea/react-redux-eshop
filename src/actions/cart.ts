import { Product } from "../types/Product";
import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_BEGIN,
  ADD_TO_CART_FAIL,
  INCREASE_QTY_BEGIN,
  INCREASE_QTY_FAIL,
  INCREASE_QTY_SUCCESS,
  DECREASE_QTY_BEGIN,
  DECREASE_QTY_FAIL,
  DECREASE_QTY_SUCCESS,
  REMOVE_FROM_CART,
  AppActions
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store";

export const addToCartBegin = (message: string): AppActions => ({
  type: ADD_TO_CART_BEGIN,
  payload: message
});

export const addToCartSuccess = (product: Product): AppActions => ({
  type: ADD_TO_CART_SUCCESS,
  product
});

export const addToCartFail = (error: string): AppActions => ({
  type: ADD_TO_CART_FAIL,
  payload: error
});

export const addToCart = (product: Product) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(addToCartSuccess(product));
  };
};

export const removeFromCartSuccess = (id: string): AppActions=>({
  type: REMOVE_FROM_CART,
  id
})

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeFromCartSuccess(id));
  };
};

export const increaseQtyBegin = (message: string): AppActions => ({
  type: INCREASE_QTY_BEGIN,
  payload: message
});

export const increaseQtySuccess = (id: string, qty: number): AppActions => ({
  type: INCREASE_QTY_SUCCESS,
  id,
  qty
});

export const increaseQtyFail = (error: string): AppActions => ({
  type: INCREASE_QTY_FAIL,
  payload: error
});

export const increaseQty = (id: string, qty: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(increaseQtySuccess(id, qty));
  };
};export const decreaseQtyBegin = (message: string): AppActions => ({
  type: DECREASE_QTY_BEGIN,
  payload: message
});

export const decreaseQtySuccess = (id: string, qty: number): AppActions => ({
  type: DECREASE_QTY_SUCCESS,
  id,
  qty
});

export const decreaseQtyFail = (error: string): AppActions => ({
  type: DECREASE_QTY_FAIL,
  payload: error
});

export const decreaseQty = (id: string, qty: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(decreaseQtySuccess(id, qty));
  };
};
