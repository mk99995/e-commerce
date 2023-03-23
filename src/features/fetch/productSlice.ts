import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk('/products/fetchAll', async () => {
  return fetch('http://localhost:5173/products.json').then((res) => res.json())
})

export interface ProductsState {
  products: [{ name: string }] | []
  loading: boolean
}

const initialState: ProductsState = {
  products: [],
  loading: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default productsSlice.reducer
