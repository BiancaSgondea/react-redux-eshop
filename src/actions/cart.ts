import { Product } from "../types/Product";
import {
  ADD_TO_CART_SUCCESS,
  INCREASE_QTY,
  DECREASE_QTY,
  REMOVE_FROM_CART,
  AppActions
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store";


export const addToCartSuccess = (product: Product): AppActions => ({
  type: ADD_TO_CART_SUCCESS,
  product
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


export const increaseQtySuccess = (id: string, qty: number): AppActions => ({
  type: INCREASE_QTY,
  id,
  qty
});



export const increaseQty = (id: string, qty: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(increaseQtySuccess(id, qty));
  };
}

export const decreaseQtySuccess = (id: string, qty: number): AppActions => ({
  type: DECREASE_QTY,
  id,
  qty
});

export const decreaseQty = (id: string, qty: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(decreaseQtySuccess(id, qty));
  };
};
