import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

import { login } from './features/user/userSlice'
import ProductCards from './components/ProductCards/ProductCard'
import Search from './components/Search/Search'
import Cart from './components/Cart/Cart'

function App() {
  const userData = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = (credential: string | undefined) => {
    {
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
        dispatch(login(user.email))
      }
    }
  }

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <div className="App">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleLogin(credentialResponse.credential)
          }}
        />
        <p>{userData.userName}</p>
        <Cart />
        <h1>Vite + React + Toolkit + Tailwind</h1>
        <Search />
        <ProductCards />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
