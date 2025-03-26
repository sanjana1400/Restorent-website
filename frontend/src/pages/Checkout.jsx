"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import {
  CreditCard,
  ShoppingCart,
  Wallet,
  Check,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Truck,
  Store,
  User,
  Phone,
  Mail,
} from "lucide-react"

const DELIVERY_FEE = 4.99

function Checkout({ cartItems, removeAllItems }) {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [orderType, setOrderType] = useState("delivery")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [deliveryTime, setDeliveryTime] = useState("asap")
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")

  // Form states
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const [addressInfo, setAddressInfo] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const deliveryFee = orderType === "delivery" ? DELIVERY_FEE : 0
  const total = subtotal + tax + deliveryFee

  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cartItems.length === 0 && !orderPlaced) {
      navigate("/cart")
      toast.error("Your cart is empty")
    }

    // Generate random order ID when order is placed
    if (orderPlaced && !orderId) {
      setOrderId(`MHR${Math.floor(100000 + Math.random() * 900000)}`)
    }
  }, [cartItems, navigate, orderPlaced, orderId])

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target
    setContactInfo({
      ...contactInfo,
      [name]: value,
    })
  }

  const handleAddressInfoChange = (e) => {
    const { name, value } = e.target
    setAddressInfo({
      ...addressInfo,
      [name]: value,
    })
  }

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target
    setCardDetails({
      ...cardDetails,
      [name]: value,
    })
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmitPayment = (e) => {
    e.preventDefault()
    setIsProcessingPayment(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false)
      setOrderPlaced(true)
      setCurrentStep(4)
      removeAllItems() // Clear cart after successful order
      window.scrollTo(0, 0)
    }, 2000)
  }

  // Render different steps based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderDeliveryOptions()
      case 2:
        return renderContactInfo()
      case 3:
        return renderPaymentMethod()
      case 4:
        return renderOrderConfirmation()
      default:
        return renderDeliveryOptions()
    }
  }

  const renderDeliveryOptions = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Delivery Options</h2>

        <div className="mb-6">
          <p className="text-gray-700 mb-3">How would you like to receive your order?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${orderType === "delivery" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
              onClick={() => setOrderType("delivery")}
            >
              <div className="flex items-center">
                <Truck className="mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Delivery</h3>
                  <p className="text-sm text-gray-600">Delivered to your address</p>
                </div>
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${orderType === "pickup" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
              onClick={() => setOrderType("pickup")}
            >
              <div className="flex items-center">
                <Store className="mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Pickup</h3>
                  <p className="text-sm text-gray-600">Ready for pickup at our restaurant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-3">When would you like your order?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${deliveryTime === "asap" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
              onClick={() => setDeliveryTime("asap")}
            >
              <div className="flex items-center">
                <Clock className="mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">As Soon As Possible</h3>
                  <p className="text-sm text-gray-600">30-45 min delivery time</p>
                </div>
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${deliveryTime === "scheduled" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
              onClick={() => setDeliveryTime("scheduled")}
            >
              <div className="flex items-center">
                <Clock className="mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Schedule for Later</h3>
                  <p className="text-sm text-gray-600">Choose a specific time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {deliveryTime === "scheduled" && (
          <div className="mb-6">
            <label htmlFor="scheduledTime" className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <select id="scheduledTime" className="w-full p-2 border rounded-md">
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="13:30">1:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
            </select>
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
            Special Instructions (Optional)
          </label>
          <textarea
            id="specialInstructions"
            rows="3"
            className="w-full p-2 border rounded-md"
            placeholder="Allergies, special requests, etc."
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            onClick={nextStep}
            className="bg-primary hover:bg-primary/90 text-black py-2 px-6 rounded-md font-medium flex items-center"
          >
            Continue <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  const renderContactInfo = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={contactInfo.firstName}
              onChange={handleContactInfoChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contactInfo.lastName}
              onChange={handleContactInfoChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contactInfo.phone}
              onChange={handleContactInfoChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {orderType === "delivery" && (
          <>
            <h3 className="text-xl font-semibold mb-4">Delivery Address</h3>

            <div className="mb-4">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={addressInfo.street}
                onChange={handleAddressInfoChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                Apartment, Suite, etc. (Optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={addressInfo.apartment}
                onChange={handleAddressInfoChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={addressInfo.city}
                  onChange={handleAddressInfoChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={addressInfo.state}
                  onChange={handleAddressInfoChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={addressInfo.zipCode}
                  onChange={handleAddressInfoChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
          </>
        )}

        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-md font-medium flex items-center"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Back
          </button>
          <button
            onClick={nextStep}
            className="bg-primary hover:bg-primary/90 text-black py-2 px-6 rounded-md font-medium flex items-center"
          >
            Continue <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  const renderPaymentMethod = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "credit-card" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
            onClick={() => setPaymentMethod("credit-card")}
          >
            <div className="flex flex-col items-center">
              <CreditCard className="mb-2 text-primary" />
              <div className="text-center">
                <h3 className="font-medium">Credit Card</h3>
                <p className="text-xs text-gray-600">Visa, Mastercard, Amex</p>
              </div>
            </div>
          </div>
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "paypal" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
            onClick={() => setPaymentMethod("paypal")}
          >
            <div className="flex flex-col items-center">
              <ShoppingCart className="mb-2 text-primary" />
              <div className="text-center">
                <h3 className="font-medium">PayPal</h3>
                <p className="text-xs text-gray-600">Pay with your PayPal account</p>
              </div>
            </div>
          </div>
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "wallet" ? "border-primary bg-primary/10" : "hover:border-gray-400"}`}
            onClick={() => setPaymentMethod("wallet")}
          >
            <div className="flex flex-col items-center">
              <Wallet className="mb-2 text-primary" />
              <div className="text-center">
                <h3 className="font-medium">Digital Wallet</h3>
                <p className="text-xs text-gray-600">Apple Pay, Google Pay</p>
              </div>
            </div>
          </div>
        </div>

        {paymentMethod === "credit-card" && (
          <form onSubmit={handleSubmitPayment}>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleCardDetailsChange}
                placeholder="John Doe"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardDetailsChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  placeholder="123"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
          </form>
        )}

        {paymentMethod === "paypal" && (
          <div className="text-center p-4 border rounded-md bg-gray-50 mb-6">
            <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
            <img
              src="/paypal-logo.png"
              alt="PayPal"
              className="h-10 mx-auto mb-4"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              }}
            />
          </div>
        )}

        {paymentMethod === "wallet" && (
          <div className="text-center p-4 border rounded-md bg-gray-50 mb-6">
            <p className="mb-4">Choose your digital wallet provider:</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="p-3 border rounded-md hover:bg-gray-100 flex items-center justify-center">
                <span className="mr-2">Apple Pay</span>
              </button>
              <button className="p-3 border rounded-md hover:bg-gray-100 flex items-center justify-center">
                <span className="mr-2">Google Pay</span>
              </button>
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="max-h-60 overflow-y-auto mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center">
                  <span className="font-medium mr-2">{item.quantity}x</span>
                  <span>{item.name}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {orderType === "delivery" && (
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${DELIVERY_FEE.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-md font-medium flex items-center"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Back
          </button>
          <button
            onClick={handleSubmitPayment}
            disabled={isProcessingPayment}
            className="bg-primary hover:bg-primary/90 text-black py-2 px-6 rounded-md font-medium flex items-center"
          >
            {isProcessingPayment ? "Processing..." : "Place Order"}
            {!isProcessingPayment && <ChevronRight className="ml-1 h-4 w-4" />}
          </button>
        </div>
      </div>
    )
  }

  const renderOrderConfirmation = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Thank You for Your Order!</h2>
        <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 inline-block">
          <p className="text-gray-700">
            Order ID: <span className="font-semibold">{orderId}</span>
          </p>
        </div>

        <div className="max-w-md mx-auto text-left mb-8">
          <div className="flex items-start mb-4">
            <User className="h-5 w-5 text-primary mr-3 mt-1" />
            <div>
              <h3 className="font-medium">Customer</h3>
              <p className="text-gray-600">
                {contactInfo.firstName} {contactInfo.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>
          </div>

          {orderType === "delivery" ? (
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Delivery Address</h3>
                <p className="text-gray-600">
                  {addressInfo.street}
                  {addressInfo.apartment ? `, ${addressInfo.apartment}` : ""}
                  <br />
                  {addressInfo.city}, {addressInfo.state} {addressInfo.zipCode}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start mb-4">
              <Store className="h-5 w-5 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Pickup Location</h3>
                <p className="text-gray-600">
                  Maharaja Restaurant
                  <br />
                  123 Restaurant Street, City
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start mb-4">
            <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
            <div>
              <h3 className="font-medium">Estimated {orderType === "delivery" ? "Delivery" : "Pickup"} Time</h3>
              <p className="text-gray-600">{deliveryTime === "asap" ? "30-45 minutes" : "At your scheduled time"}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-left">Order Details</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center">
                <span className="font-medium mr-2">{item.quantity}x</span>
                <span>{item.name}</span>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="space-y-2 mt-4 text-left">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {orderType === "delivery" && (
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${DELIVERY_FEE.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="bg-primary hover:bg-primary/90 text-black py-2 px-6 rounded-md font-medium inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Progress bar for checkout steps
  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        <div className="flex justify-between">
          <div className={`text-center ${currentStep >= 1 ? "text-primary" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}
            >
              1
            </div>
            <span className="text-sm">Delivery</span>
          </div>
          <div className={`text-center ${currentStep >= 2 ? "text-primary" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}
            >
              2
            </div>
            <span className="text-sm">Contact</span>
          </div>
          <div className={`text-center ${currentStep >= 3 ? "text-primary" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}
            >
              3
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div className={`text-center ${currentStep >= 4 ? "text-primary" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${currentStep >= 4 ? "bg-primary text-white" : "bg-gray-200"}`}
            >
              4
            </div>
            <span className="text-sm">Confirmation</span>
          </div>
        </div>
        <div className="relative mt-2">
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-200"></div>
          <div
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 bg-primary transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

      {!orderPlaced && renderProgressBar()}

      {renderStep()}
    </div>
  )
}

export default Checkout

