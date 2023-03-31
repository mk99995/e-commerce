import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('/products/fetchAll', async () => {
  return fetch('/products.json').then((res) => res.json())
})

export type Product = {
  name: string
  id: number
  category: string
  variant: string[]
  price: number
}
export interface ProductsState {
  products: Product[]
  filteredProducts: Product[]
  loading: boolean
  searchTerm: string
  filterCategory: string
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
  searchTerm: '',
  filterCategory: 'All'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.searchTerm = action.payload.searchTerm ?? state.searchTerm
      state.filterCategory = action.payload.category ?? state.filterCategory
      state.filteredProducts = state.products
      state.filteredProducts = state.filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          (state.filterCategory === 'All' ? true : state.filterCategory === product.category)
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
