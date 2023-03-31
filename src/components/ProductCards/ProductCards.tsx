import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/product/productSlice'

import ProductCard from './ProductCart/ProductCart'
import { AppDispatch, RootState } from '../../store'
import CartButton from '../Cart/CartButton/CartButton'
import SelectCategory from './SelectCategory/SelectCategory'
import { Link } from 'react-router-dom'
import Search from './Search/Search'

const ProductCards = () => {
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="cards">
      <Search />
      <SelectCategory />
      {filteredProducts?.map((item) => (
        <div className="product-card" key={item.name + item.id.toString()}>
          <Link to={'/' + item.id}>
            <ProductCard name={item.name} price={item.price} />
          </Link>
          {item.variant.length > 1 ? (
            <select>
              {item.variant.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : null}
          <CartButton product={item} />
        </div>
      ))}
    </div>
  )
}

export default ProductCards
