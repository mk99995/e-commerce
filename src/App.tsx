import './App.scss'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar/NavigationBar'
import ProductCards from './components/ProductCards/ProductCards'
import Search from './components/ProductCards/Search/Search'
import Cart from './components/Cart/Cart'
import UserPage from './components/UserPage/UserPage'
import Checkout from './components/Checkout/Checout'

function App() {
  const userData = useSelector((state: RootState) => state.user)

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductCards />}></Route>
        <Route path="/:id" element={<UserPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<UserPage />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
