import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/product/productSlice'

import { AppDispatch, RootState } from '../../store'

const ProductCards = () => {
  const products = useSelector((state: RootState) => state.products.products)

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="cards">
      {products?.map((item) => (
        <div key={item?.name + item?.id?.toString()}>
          <p>{item.name}</p>
          <p>{(Math.random() * 10 * Math.random()).toFixed(2)}€</p>
        </div>
      ))}
    </div>
  )
}

export default ProductCards
