import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { productReducer } from "./reducers/product";
import { AppActions } from "./types/actions";
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
