import { createSlice, createAction } from '@reduxjs/toolkit'
import { Product } from '../product/productSlice'
export interface UserState {
  userName: string | null
  cart: { product: Product; amount: number }[]
}

const initialState: UserState = {
  userName: null,
  cart: []
}
export const addItem = createAction<Product>('cart/addItem')
export const removeItem = createAction<Product>('cart/removeItem')
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload
    }
  },
  extraReducers: (builder) => {
    return builder
      .addCase(addItem, (state, action) => {
        const matchinItem = state.cart.filter((item) => item.product.id === action.payload.id)
        matchinItem.length >= 1
          ? matchinItem[0].amount++
          : state.cart.push({ product: action.payload, amount: 1 })
      })
      .addCase(removeItem, (state, action) => {
        const matchinItem = state.cart.filter((item) => item.product.id === action.payload.id)
        if (matchinItem.length >= 1) {
          matchinItem[0].amount > 1
            ? matchinItem[0].amount--
            : (state.cart = state.cart.filter((item) => item.product.id !== action.payload.id))
        }
      })
  }
})
export const { login } = userSlice.actions

export default userSlice.reducer
