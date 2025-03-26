import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Location() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return; // Ensure the container exists

    mapboxgl.accessToken =
      "pk.eyJ1IjoieWFzbWluLWpwcjI1IiwiYSI6ImNsemt3d2IwYTBhZ24yeHM5NHdhY2M3OHQifQ.Ar-CZW_0ayeboTxH0grFCA";

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [75.789, 26.9124], // Jaipur coordinates
        zoom: 12,
      });

      // Add zoom & rotation controls
      mapRef.current.addControl(new mapboxgl.NavigationControl());
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; // Reset ref
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-13">Visit Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-[#FFB800] text-2xl">📍</span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Restaurant Street, Jaipur
                  <br />
                  Jaipur, Rajasthan 123457
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-[#FFB800] text-2xl">📞</span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-[#FFB800] text-2xl">⏰</span>
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
            </div>

            <button className="w-full bg-[#FFB800] hover:bg-[#e6a700] text-black py-2 rounded-lg font-semibold transition">
              Get Directions
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[400px] w-full bg-gray-200 rounded-lg">
          <div ref={mapContainerRef} className="h-full w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
