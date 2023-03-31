import { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, AppDispatch } from '../../../store'
import { searchProducts } from '../../../features/product/productSlice'

const SelectCategory = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch<AppDispatch>()

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value
    console.log(selectedOption)
    dispatch(searchProducts({ searchTerm: undefined, category: selectedOption }))
  }

  return (
    <select onChange={handleSelect}>
      <option value={'All'}>All</option>
      {[...new Set(products.map((item) => item.category))].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default SelectCategory
