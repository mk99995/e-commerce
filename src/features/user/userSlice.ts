import { createSlice, createAction } from '@reduxjs/toolkit'

export interface UserState {
  userName: string | null
  cart: number[]
}

const initialState: UserState = {
  userName: null,
  cart: []
}
const addItem = createAction<number>('cart/addItem')

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(addItem, (state, action) => {
      state.cart.push(action.payload)
    })
  }
})
export const { login } = userSlice.actions

export default userSlice.reducer
