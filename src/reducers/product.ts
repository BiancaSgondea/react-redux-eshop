import { Product } from "../types/Product"
import { ProductActionTypes,  GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../types/actions"

const productReducerDefaultState: Product[] = [];

const productReducer = (
  state = productReducerDefaultState,
  action: ProductActionTypes
): Product[] => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
        return action.products
        case GET_PRODUCTS_FAIL:
        return state
    default:
      return state;
  }
};

export { productReducer };
