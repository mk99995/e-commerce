import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../ProductCart/ProductCart'
import { AppDispatch, RootState } from '../../store'
import CartButton from '../CartButton/CartButton'
import CartRemoveButton from '../CartRemoveButton/CartRemoveButton'

const Cart = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const cart = useSelector((state: RootState) => state.user.cart)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="cart">
      {cart?.map((item) => (
        <div key={item?.product.id.toString()}>
          <ProductCard name={item.product.name} />
          <p>{item.amount}</p>
          <CartButton product={item.product} />
          <CartRemoveButton product={item.product} />
        </div>
      ))}
    </div>
  )
}

export default Cart
