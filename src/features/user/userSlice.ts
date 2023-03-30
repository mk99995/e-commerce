import { createSlice, createAction } from '@reduxjs/toolkit'
import { Product } from '../product/productSlice'

export interface UserState {
  firstName: string | null
  lastName: string | null
  email: string | null
  cart: {
    product: Product
    amount: number
  }[]
  orders: {
    email: string
    items: {
      product: Product
      amount: number
    }[]
    purchasedAt: string
  }[]
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  cart: [],
  orders: []
}
export const addItem = createAction<Product>('cart/addItem')
export const removeItem = createAction<Product>('cart/removeItem')
export const addOrder = createAction<void>('cart/addOrder')

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
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
      .addCase(addOrder, (state) => {
        if (state.cart.length < 1 || state.email === null) return
        state.orders.push({
          email: state.email,
          items: state.cart,
          purchasedAt: new Date().toDateString()
        })
        state.cart = []
      })
  }
})
export const { login } = userSlice.actions

export default userSlice.reducer
