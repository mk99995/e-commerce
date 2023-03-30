import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../ProductCart/ProductCart'
import { AppDispatch, RootState } from '../../store'

const Checkout = () => {
  const userData = useSelector((state: RootState) => state.user)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //   onSubmit(formData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = event.target
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value
    // }))
  }
  return (
    <>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <p>
          {userData.firstName} {userData.lastName}
        </p>
        <label htmlFor="email">Email:</label>
        <p>{userData.email}</p>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={''}
          onChange={handleChange}
          required
        />

        <select>
          <option value="">Select payment method</option>
          <option value="asd">asd</option>
          <option value="zxc">zxc</option>
          <option value="qwe">qwe</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default Checkout
