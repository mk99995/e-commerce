import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeSearch } = searchSlice.actions

export default searchSlice.reducer
