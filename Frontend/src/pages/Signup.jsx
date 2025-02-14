import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const BE = import.meta.env.VITE_BE;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${BE}/api/v1/user/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess("Signed up successfully!");
      setFormData({ name: "", username: "", password: "" });

      setTimeout(() => navigate("/signin"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex h-screen w-full justify-between">
      <div className="w-full h-screen flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-vector/climate-change-abstract-concept-vector-illustration_107173-24294.jpg"
          alt="logo"
          className="w-[630px] h-[630px]"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen mr-80">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register to continue your learning journey
          </h2>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-center mt-2">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600"
            >
              🔐 Signup
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Have an account?{" "}
              <a href="/signin" className="text-orange-600 font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
