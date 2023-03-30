import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { Product } from '../../../features/product/productSlice'
import { addItem, removeItem } from '../../../features/user/userSlice'
import { AppDispatch, RootState } from '../../../store'

const CartButton = (props: { product: Product }) => {
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.user.cart)

  const handleClick = (product: Product) => {
    dispatch(addItem(product))
  }
  console.log('button render')

  return (
    <>
      <button
        onClick={() => {
          handleClick(props.product)
        }}>
        Add to cart
      </button>
      {/* <p>{cart.includes(props.id) ? 'true' : 'false'}</p> */}
    </>
  )
}

export default CartButton
