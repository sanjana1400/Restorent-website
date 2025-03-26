"use client"
import { Link } from "react-router-dom"
import { toast } from "sonner"

function Cart({ cartItems, updateCartItem, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      updateCartItem({ ...item, quantity: newQuantity })
    }
  }

  const handleRemoveItem = (item) => {
    removeFromCart(item)
    toast.success(`${item.name} removed from cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Link to="/menu" className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-md font-medium">
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveItem(item)} className="ml-4 text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-primary hover:bg-primary/90 text-black py-2 px-4 rounded-md font-medium mt-6 block text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart


