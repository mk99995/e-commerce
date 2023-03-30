import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/product/productSlice'

import ProductCard from '../ProductCart/ProductCart'
import { AppDispatch, RootState } from '../../store'
import CartButton from '../CartButton/CartButton'

const ProductCards = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const cart = useSelector((state: RootState) => state.user.cart)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log(cart)

  return (
    <div className="cards">
      {products?.map((item) => (
        <div key={item?.name + item?.id?.toString()}>
          <ProductCard name={item.name} />
          <CartButton product={item} />
        </div>
      ))}
    </div>
  )
}

export default ProductCards
