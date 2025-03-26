import { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const signatureDishes = ["Shahi Gatte", "Mohan Maas", "Royal Kadhi"];
  const royalSweets = ["Ghewar", "Moong Dal Halwa", "Balushahi"];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 500); // Color stays for 0.5s
  };

  return (
    <>
      {/* Section 1 - Hero */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Badam_Halwa.jpg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Experience Authentic Rajasthani Cuisine
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover the royal flavors of Rajasthan, where every dish tells a story of tradition and heritage.
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black">
              Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 2 - Royal Thali */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFB800] mb-4">
              Royal Rajasthani Thali
            </h2>
            <p className="text-gray-700 mb-6">
              Indulge in our signature thali, a grand assortment of authentic dishes served in traditional style:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✅ Dal Baati Churma</li>
              <li>✅ Gatte ki Sabzi</li>
              <li>✅ Ker Sangri</li>
              <li>✅ Bajra Roti</li>
              <li>✅ Traditional Kadhi</li>
              <li>✅ Assorted Chutneys</li>
            </ul>
            <p className="text-red-600 text-xl font-bold">Price: ₹799</p>
          </div>
          <div className="md:w-1/2">
            <img src="/Royal_Rajasthani_Thali.jpg" alt="Royal Rajasthani Thali" className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Section 3 - Our Royal Specialties */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {Disies.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={dish.image} alt={dish.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="text-red-600 text-lg font-bold">₹{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* //section-4 */}
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./Traditional_Rajasthani_kadhi.jpg"
            alt="kadhi"
            className="rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            OUR SIGNATURE DISHES
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Experience the culinary excellence of Maharaja with our signature
            dishes, crafted with love and tradition.
          </p>

          {/* Buttons List */}
          <div className="space-y-4">
            {signatureDishes.map((dish, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-full md:w-[400px] h-[60px] text-lg font-semibold py-3 px-6 border rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${
                  activeIndex === index
                    ? "bg-yellow-500 text-white scale-105 shadow-lg"
                    : "bg-white text-gray-800 hover:bg-yellow-300 hover:text-black hover:scale-105"
                }`}
              >
                {dish}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
         
         {/* //section-5 */}
         <section className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            OUR ROYAL SWEETS
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Indulge in our traditional Rajasthani sweets, prepared with
            authentic recipes and rich flavors.
          </p>

          {/* Buttons List */}
          <div className="space-y-4">
            {royalSweets.map((sweet, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-full md:w-[400px] h-[60px] text-lg font-semibold py-3 px-6 border rounded-lg shadow-md transition-all duration-150 ease-in-out transform ${
                  activeIndex === index
                    ? "bg-yellow-500 text-white scale-105 shadow-lg"
                    : "bg-white text-gray-800 hover:bg-yellow-300 hover:text-black hover:scale-105"
                }`}
              >
                {sweet}
              </button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./Ghewar.jpg"
            alt="Rajasthani Sweets"
            className="rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>

         {/* Section  - Our Specialties */}
         <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full w-24 h-24 mx-auto mb-4 bg-[#FFB800]/10 flex items-center justify-center text-3xl">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const specialties = [
  { title: "Traditional Recipes", description: "Authentic dishes passed down through generations", icon: "🍲" },
  { title: "Royal Experience", description: "Dine like the maharajas of Rajasthan", icon: "👑" },
  { title: "Fresh Ingredients", description: "Locally sourced spices and ingredients", icon: "🌿" },
];

const Disies = [
  { id: 1, name: "Dal Baati Churma", description: "A royal treat of crispy Baati, rich Dal, and sweet Churma.", price: 395, image: "./dal_bati_churma.jpg" },
  { id: 2, name: "Malpua Rabri", description: "Fiery Rajasthani dessert with traditional spices.", price: 595, image: "./Malpua_Rabri.jpg" },
  { id: 3, name: "Ker Sangri", description: "Desert beans and berries cooked with spices.", price: 345, image: "./ker_sangari.jpg" },
];
