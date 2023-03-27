import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeSearch } from '../features/search/searchSlice'
import { AppDispatch } from '../store'

const Search = () => {
  const [newProducts, setProducts] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: any) => {
    setProducts(e.target.value)

    dispatch(changeSearch(e.target.value))
  }
  return <input type="text" value={newProducts} onChange={handleChange} />
}

export default Search
