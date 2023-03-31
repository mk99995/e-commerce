import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../ProductCards/ProductCart/ProductCart'
import { AppDispatch, RootState } from '../../store'
import CartButton from './CartButton/CartButton'
import CartRemoveButton from './CartRemoveButton/CartRemoveButton'
import { addOrder } from '../../features/user/userSlice'
const Cart = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const cart = useSelector((state: RootState) => state.user.cart)
  const dispatch = useDispatch<AppDispatch>()
  function handleClick() {
    dispatch(addOrder())
  }

  return (
    <div className="cart">
      {cart?.map((item) => (
        <div key={item?.product.id.toString()}>
          <ProductCard name={item.product.name} price={item.product.price} />
          <p>{item.amount}</p>

          <CartButton product={item.product} />
          <CartRemoveButton product={item.product} />
        </div>
      ))}
      <p>Total: {cart.reduce((a, b) => a + b.product.price * b.amount, 0).toFixed(2)}€</p>
      <button onClick={handleClick}>Checkout</button>
    </div>
  )
}

export default Cart
