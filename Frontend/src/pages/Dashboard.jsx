import React, { useState } from "react";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <aside className={`w-full md:w-1/4 bg-gray-900 p-6 flex flex-col items-center md:block ${isOpen ? "block" : "hidden"}`}> 
        <div className="mb-6">
          <img
            src="https://imgs.search.brave.com/-dSth8I1Iw2zTNDzCGq9yi3flWorrmZ29Me9d1QJquU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pOC5h/bXBsaWVuY2UubmV0/L2kvbmFyYXMvTUkw/MDA0MjI0NDAyLU1O/MDAwMjcwOTY0Ng"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
        </div>
        <h2 className="text-lg font-semibold">Sunny Saurya</h2>
        <nav className="mt-6 w-full">
          <ul className="space-y-4">
            <li className="bg-gray-700 p-3 rounded text-center">Dashboard</li>
            <li className="hover:bg-gray-700 p-3 rounded text-center cursor-pointer">Classes</li>
            <li className="hover:bg-gray-700 p-3 rounded text-center cursor-pointer">Courses</li>
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-8 bg-gradient-to-r from-[#FFFFFF] to-[#FBFDEB] relative">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to <span className="text-gray-900">ThriveU</span> Sunny</h1>
          <div className="md:hidden flex">
            <FiMenu className="text-3xl mr-9 cursor-pointer text-black " onClick={() => setIsOpen(!isOpen)} />
          </div>
          <button className="bg-zinc-800 px-4 py-2 rounded">Logout</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards 
            title="Data Structure & Algorithm" 
            description="DSA focuses on organizing and processing data efficiently using structures like arrays, trees, and graphs. It is essential for optimizing problem-solving and coding interviews." 
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          />
          <Cards
            title="Web Development"
            description="Web development involves building and maintaining websites or web applications using technologies like HTML, CSS, JavaScript, and frameworks like React or Node.js."
            image="https://imgs.search.brave.com/UE9fxyzuRQOqIdpyeVzex038udhcEWCzkENB3aSfkUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzE0Lzg3Lzk2/LzM2MF9GXzIxNDg3/OTY4Nl9SM0hGSmxr/NldMcjFrY2R2eTZR/OXJ0TkFTS04wQlpC/Uy5qcGc"
          />
          <Cards
            title="Machine Learning"
            description="Machine learning enables computers to learn from data and make predictions without explicit programming."
            image="https://imgs.search.brave.com/rE27-ntdCb_jZx6F8UU5Cc4qAHg5spz2pYD6dkP0Cf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA4/NDU4MDg3Ni9waG90/by9hcnRpZmljaWFs/LWludGVsbGlnZW5j/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9R1JhZEtDU1lo/YmgzRHJ4eEN5bWhC/bU5kbC1UaTlUQnVF/WW04bUkwRFRpUT0"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
