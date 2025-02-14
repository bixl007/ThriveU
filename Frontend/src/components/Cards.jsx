import React from "react";

export function Card() {
  return (
    <div className="mt-6 w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Review Check</h5>
        <p className="text-gray-600">
          The place is close to Barceloneta xyz Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="p-4 pt-0">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
}
