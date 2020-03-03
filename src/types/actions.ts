import { Product } from "./Product";

export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCESS";
export interface SuccessAddToCartAction {
  type: typeof ADD_TO_CART_SUCCESS;
  product: Product;
}

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export interface SucessRemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  id: string;
}

export const INCREASE_QTY = "INCREASE_QTY";
export interface IncreaseQtyAcction {
  type: typeof INCREASE_QTY;
  id: string;
  qty: number;
}

export const DECREASE_QTY = "DECREASE_QTY";
export interface DecreaseQtyAcction {
  type: typeof DECREASE_QTY;
  id: string;
  qty: number;
}

export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export interface BeginGetProductsAction {
  type: typeof GET_PRODUCTS_BEGIN;
  loading: boolean;
}
export interface SuccessGetProductsAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  products: Product[];
}
export interface FailGetProductsAction {
  type: typeof GET_PRODUCTS_FAIL;
  error: string;
}

export type ProductActionTypes =
  | BeginGetProductsAction
  | SuccessGetProductsAction
  | FailGetProductsAction;

export type CartActionTypes =
  | SuccessAddToCartAction
  | IncreaseQtyAcction
  | DecreaseQtyAcction
  | SucessRemoveFromCartAction;

export type AppActions = ProductActionTypes | CartActionTypes;
