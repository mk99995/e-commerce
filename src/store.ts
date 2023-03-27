import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productsReducer from './features/fetch/productSlice'
import searchReducer from './features/search/searchSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    search: searchReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
