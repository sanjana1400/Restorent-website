import React from "react";

const galleryImages = [
  {
    url: "./Royal_Rajasthani_Thali.jpg",
    alt: "Traditional Rajasthani Thali",
  },
  {
    url: "./Hotel Rajasthan Palace.jpg",
    alt: "Restaurant Interior",
  },
  {
    url: "./Camel Ride.jpg",
    alt: "camels ride",
  },
  {
    url: "./Desert_landscape.jpg",
    alt: "Desert_landscape",
  },
  {
    url: "./rajasthani_place.jpg",
    alt: "Rajasthani place",
  },
  {
    url: "./Traditional_Rajasthani_kadhi.jpg",
    alt: "kadhi",
  },
  {
    url: "./rajasthani food.jpeg.jpg",
    alt: "Rajasthani food",
  },
  {
    url: "./Traditional.jpg",
    alt: "Traditional dance",
  },
  {
    url: "./City Palace.jpg",
    alt: "city place",
  },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Our Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
