import { Product } from "../types/Product";
import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_BEGIN,
  ADD_TO_CART_FAIL,
  INCREASE_QTY_BEGIN,
  INCREASE_QTY_SUCCESS,
  INCREASE_QTY_FAIL,
  DECREASE_QTY_BEGIN,
  DECREASE_QTY_FAIL,
  DECREASE_QTY_SUCCESS,
  REMOVE_FROM_CART,
  CartActionTypes
} from "../types/actions";

const cartReducerDefaultState: Product[] = [];

const cartReducer = (
  state = cartReducerDefaultState,
  action: CartActionTypes
): Product[] => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return state.filter(({ npkId }) => npkId !== action.id);

    case INCREASE_QTY_SUCCESS:
      return state.map(product => {
        if (product.npkId === action.id) {
          product.qty = action.qty;
          return product;
        } else {
          return product;
        }
      });
    case DECREASE_QTY_SUCCESS:
      return state.map(product => {
        if (product.npkId === action.id) {
          product.qty = action.qty;
          return product;
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};

export { cartReducer };
