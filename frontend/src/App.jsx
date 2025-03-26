"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer"
import Home from "./app/Home"
import About from "./app/about/About"
import Menu from "./app/Menu/Menu"
import Gallery from "./app/gallery/Gallery"
import Location from "./app/location/Location"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Reserve from "./app/Reserve/Reservetable"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const updateCartItem = (updatedItem) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
  }

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemToRemove.id))
  }

  const removeAllItems = () => {
    setCartItems([])
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartItems={cartItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />}
            />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} removeAllItems={removeAllItems} />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </Router>
  )
}

export default App

