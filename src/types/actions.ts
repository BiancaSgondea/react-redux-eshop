import { Product } from "./Product";

export const ADD_TO_CART_BEGIN = "ADD_TO_CART_BEGIN";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCESS";
export const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
export interface BeginAddToCartAction {
  type: typeof ADD_TO_CART_BEGIN;
  payload: string;
}
export interface SuccessAddToCartAction {
  type: typeof ADD_TO_CART_SUCCESS;
  product: Product;
}
export interface FailAddToCartAction {
  type: typeof ADD_TO_CART_FAIL;
  payload: string;
}

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export interface SucessRemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  id: string;
}

export const INCREASE_QTY_BEGIN = "INCREASE_QTY_BEGIN";
export const INCREASE_QTY_SUCCESS = "INCREASE_QTY_SUCCESS";
export const INCREASE_QTY_FAIL = "INCREASE_QTY_FAIL";

export interface BeginIncreaseQtyAcction {
  type: typeof INCREASE_QTY_BEGIN;
  payload: string;
}
export interface SuccessIncreaseQtyAcction {
  type: typeof INCREASE_QTY_SUCCESS;
  id: string;
  qty: number;
}
export interface FailIncreaseQtyAction {
  type: typeof INCREASE_QTY_FAIL;
  payload: string;
}

export const DECREASE_QTY_BEGIN = "DECREASE_QTY_BEGIN";
export const DECREASE_QTY_SUCCESS = "DECREASE_QTY_SUCCESS";
export const DECREASE_QTY_FAIL = "DECREASE_QTY_FAIL";
export interface BeginDecreaseQtyAcction {
  type: typeof DECREASE_QTY_BEGIN;
  payload: string;
}
export interface SuccessDecreaseQtyAcction {
  type: typeof DECREASE_QTY_SUCCESS;
  id: string;
  qty: number;
}
export interface FailDecreaseQtyAction {
  type: typeof DECREASE_QTY_FAIL;
  payload: string;
}

export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export interface BeginGetProductsAction {
  type: typeof GET_PRODUCTS_BEGIN;
  payload: string;
}
export interface SuccessGetProductsAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  products: Product[];
}
export interface FailGetProductsAction {
  type: typeof GET_PRODUCTS_FAIL;
  payload: string;
}

export type ProductActionTypes =
  | BeginGetProductsAction
  | SuccessGetProductsAction
  | FailGetProductsAction;

export type CartActionTypes =
  | BeginAddToCartAction
  | SuccessAddToCartAction
  | FailAddToCartAction
  | SuccessIncreaseQtyAcction
  | BeginIncreaseQtyAcction
  | FailIncreaseQtyAction
  | SuccessDecreaseQtyAcction
  | BeginDecreaseQtyAcction
  | FailDecreaseQtyAction
  | SucessRemoveFromCartAction;

export type AppActions = ProductActionTypes | CartActionTypes;
