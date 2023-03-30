import { Link } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'

import { login } from '../../features/user/userSlice'

const NavigationBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.user.cart)

  const handleLogin = (credential: string | undefined) => {
    function parseJwt(token: string) {
      if (!token) {
        return
      }
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      return JSON.parse(window.atob(base64))
    }

    if (credential) {
      const user = parseJwt(credential)
      console.log({ firstName: user.given_name, lastName: user.family_name, email: user.email })

      dispatch(login({ firstName: user.given_name, lastName: user.family_name, email: user.email }))
    }
  }
  return (
    <>
      <nav>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/cart">cart ({cart.reduce((a, b) => a + b.amount, 0)})</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        {/* <li>
          <Link to="/checkout">checkout</Link>
        </li> */}
        <li>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleLogin(credentialResponse.credential)
              }}
            />
          </GoogleOAuthProvider>
        </li>
      </nav>
    </>
  )
}
export default NavigationBar
