import { Product } from "../types/Product"
import {ProductReducer} from "../types/ProductReducer"
import { ProductActionTypes,  GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL,GET_PRODUCTS_BEGIN } from "../types/actions"

const productReducerDefaultState: ProductReducer = {
  loading:false,
  products: [],
  error: ""
};

const productReducer = (
  state = productReducerDefaultState,
  action: ProductActionTypes
): ProductReducer=> {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS_SUCCESS:
        return{
          ...state,
          products:action.products,
          loading: false
        }
    case GET_PRODUCTS_FAIL:
        return{
          ...state,
          error:action.error,
          loading: false
        }
    default:
      return state;
  }
};

export { productReducer };
