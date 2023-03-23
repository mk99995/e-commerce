import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('/products/fetchAll', async () => {
  return fetch('http://localhost:5173/products.json').then((res) => res.json())
})

export interface ProductsState {
  products: [{ name: string; id: number }] | []
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
    return builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default productsSlice.reducer
