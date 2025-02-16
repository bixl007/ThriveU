import React from "react";

export default function Cards({title, description, image}) {
  return (
    <div className="mt-6 w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56">
        <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">{title}</h5>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
      <div className="p-4 pt-0">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          View More
        </button>
      </div>
    </div>
  );
}
