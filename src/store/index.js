import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/product/productSlice'

export default configureStore({
  reducer: {
    products: productReducer,
  },
})
