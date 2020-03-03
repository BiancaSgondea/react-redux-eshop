import { Product } from "./Product";

export interface ProductReducer {
    products: Product[];
    loading: boolean
    error: string
  }