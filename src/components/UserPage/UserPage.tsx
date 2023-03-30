import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

const UserPage = () => {
  const userData = useSelector((state: RootState) => state.user)

  return (
    <>
      <p>
        {userData.firstName} {userData.lastName}
      </p>
      <p>{userData.email}</p>

      {userData.orders?.map((item) => (
        <p>
          {item.items.reduce((a, b) => a + b.amount, 0)} items, {item.purchasedAt}
        </p>
      ))}
    </>
  )
}
export default UserPage
