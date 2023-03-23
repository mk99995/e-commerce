import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './features/fetch/productSlice'

import './App.css'
import { decrement, increment } from './features/counter/counterSlice'
import { AppDispatch, RootState } from './store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const products = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  // let asd = [1, 1, 2]
  // console.log(products)

  return (
    <div className="App">
      <h1>Vite + React + Toolkit + Tailwind</h1>
      <div className="card">
        {products.map((item) => (
          <p key={item.name + item.id.toString()}>{item.name}</p>
        ))}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span className="px-10">{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
