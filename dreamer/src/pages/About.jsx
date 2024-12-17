import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-8 mt-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://image.cnbcfm.com/api/v1/image/107028033-1646863344215-GettyImages-1316107530.jpg?v=1646863469" 
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are a dynamic company committed to providing exceptional services and products
            to our customers. Our team is composed of talented professionals who strive to make 
            a positive impact every day.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            At our core, we value integrity, innovation, and customer satisfaction. From humble beginnings
            to becoming industry leaders, our journey has been shaped by hard work and dedication.
          </p>

          <button className="mt-4 w-1/2 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
