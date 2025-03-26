import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Maharaja</h3>
            <p className="text-sm">
              Experience the authentic taste of Rajasthan in every bite.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/menu" className="block text-sm hover:text-[#FFB800]">
                Menu
              </Link>
              <Link to="/reserve" className="block text-sm hover:text-[#FFB800]">
                Reservations
              </Link>
              <Link to="/gallery" className="block text-sm hover:text-[#FFB800]">
                Gallery
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>123 Restaurant Street</p>
              <p>Jaipur, Rajasthan 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@maharaja.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-[#FFB800]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[#FFB800]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-[#FFB800]">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Maharaja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
