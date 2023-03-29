import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('/products/fetchAll', async () => {
  return fetch('http://localhost:5173/products.json').then((res) => res.json())
})

export interface ProductsState {
  products: { name: string; id: number }[] | []
  filteredProducts: { name: string; id: number }[] | []
  loading: boolean
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload
      console.log(state.products)

      state.products = state.filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  },
  extraReducers: (builder) => {
    return builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.filteredProducts = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
      })
  }
})
export const { searchProducts } = productsSlice.actions

export default productsSlice.reducer
