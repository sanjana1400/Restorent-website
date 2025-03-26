import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">OUR STORY</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/Chef-Akshraj-Jodha.jpg"
            alt="Maharaja Restaurant Interior"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Welcome to Maharaja, where we bring the royal flavors of Rajasthan to your plate. Our journey began with a
            passion for authentic Indian cuisine and a dream to share the rich culinary heritage of Rajasthan with food
            lovers around the world.
          </p>
          <p className="text-lg text-gray-700">
            Founded in 2010, Maharaja has become a beloved destination for those seeking an extraordinary dining
            experience. Our chefs, hailing from the heart of Rajasthan, bring with them generations of culinary
            expertise and a commitment to preserving traditional recipes.
          </p>
          <p className="text-lg text-gray-700">
            At Maharaja, we believe that every meal should be a celebration of flavors, culture, and community. We
            source our ingredients locally whenever possible, ensuring the freshest and highest quality dishes for our
            guests.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Visit Us Today</h2>
        <p className="text-lg text-gray-700 mb-6">
          Experience the magic of Rajasthan right here at Maharaja. We look forward to serving you and creating
          memorable dining experiences.
        </p>
        <a href="/reserve" className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-md font-medium inline-block border 2px black hover:bg-yellow-200" >
          Make a Reservation
        </a>
      </div>
    </div>
  )
}

const values = [
  {
    icon: "🍽️",
    title: "Authentic Flavors",
    description: "We stay true to traditional Rajasthani recipes, bringing you the most authentic taste experience.",
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description: "We use locally sourced, fresh ingredients to ensure the highest quality in every dish we serve.",
  },
  {
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description: "Our team of experienced chefs are passionate about creating exceptional culinary experiences.",
  },
]

export default About
