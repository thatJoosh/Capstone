import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import Products from './pages/PoductsPage'
import NavBar from './components/NavBar'
import SelectedProduct from './components/SelectedProduct'
import Login from './pages/Login'
import { UserProvider } from './components/UserContext'

function App() {

  return (
      <div>
        <UserProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />  
            <Route path="/products/:productId" element={<SelectedProduct />} />
            <Route path="/auth/login" element={<Login />} /> 
          </Routes>
        </UserProvider>
          
      </div>
  )
}

export default App
