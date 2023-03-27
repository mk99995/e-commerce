import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/fetch/productSlice'

import { AppDispatch, RootState } from '../store'

const ProductCard = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const search = useSelector((state: RootState) => state.search.value)

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="cards">
      {products
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        ?.map((item: any) => (
          <div key={item?.name + item?.id?.toString()}>
            <p>{item.name}</p>
            <p>{(Math.random() * 10 * Math.random()).toFixed(2)}€</p>
          </div>
        ))}
    </div>
  )
}

export default ProductCard
