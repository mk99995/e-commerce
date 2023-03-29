import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../features/product/productSlice'
import { AppDispatch } from '../../store'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let typedString = e.target.value

    setKeyword(typedString)

    dispatch(searchProducts(typedString))
  }
  return <input type="text" value={keyword} onChange={handleChange} />
}

export default Search
