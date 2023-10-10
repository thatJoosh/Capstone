import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import Products from './pages/PoductsPage'
import NavBar from './components/NavBar'
import SelectedProduct from './components/SelectedProduct'

function App() {

  return (
      <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />  
            <Route path="products/:productId" element={<SelectedProduct />} />
          </Routes>
      </div>
  )
}

export default App
