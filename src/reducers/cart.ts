import { Product } from "../types/Product";
import {
  ADD_TO_CART_SUCCESS,
  INCREASE_QTY,
  DECREASE_QTY,
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
    case INCREASE_QTY:
      return state.map(product => {
        if (product.npkId === action.id) {
          product.qty = action.qty;
          return product;
        } else {
          return product;
        }
      });
    case DECREASE_QTY:
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
