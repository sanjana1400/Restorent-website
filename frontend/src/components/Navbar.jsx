"use client"

import { useState , useEffect} from "react"
import { Link , useNavigate} from "react-router-dom"
import { PhoneCall, User, ShoppingCart, MenuIcon } from "lucide-react"

function Navbar({ cartItems }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
          const [isAuthenticated, setIsAuthenticated] = useState(false);
          const navigate = useNavigate();
        
          useEffect(() => {
            // Check if user is logged in (by checking token in localStorage)
            const token = localStorage.getItem("token");
            if (token) {
              setIsAuthenticated(true);
            }
          }, []);

          
      const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token on logout
        setIsAuthenticated(false);
        navigate("/login");
      };


  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Maharaja
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/menu" className="text-sm font-medium hover:text-primary">
              Menu
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link to="/location" className="text-sm font-medium hover:text-primary">
              Location
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/reserve" className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded">
              Reserve Table
            </Link>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-sm font-medium hover:text-primary flex items-center">
                <User className="h-4 w-4 mr-1" />
                Logout
              </button>
            ) : (
            <Link to="/login" className="text-sm font-medium hover:text-primary flex items-center">
              <User className="h-4 w-4 mr-1" />
              Login
            </Link>
            )}
            <Link to="/cart" className="text-sm font-medium hover:text-primary flex items-center">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Cart ({cartItems.length})
            </Link>
            <button className="border border-gray-300 p-2 rounded-full">
              <PhoneCall className="h-4 w-4" />
            </button>
            <button
              className="md:hidden border border-gray-300 p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/menu" className="block py-2 text-sm font-medium hover:text-primary">
              Menu
            </Link>
            <Link to="/gallery" className="block py-2 text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/location" className="block py-2 text-sm font-medium hover:text-primary">
              Location
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

