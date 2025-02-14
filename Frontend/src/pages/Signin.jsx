import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BE = import.meta.env.VITE_BE;

  const handleSignin = async () => {
    try {
      const response = await axios.post(`${BE}/api/v1/user/signin`, {
        username: email,
        password,
      });

      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signin error:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex h-screen w-full justify-between">
      <div className="w-full h-screen flex justify-center items-center">
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
          alt="logo"
          className="w-[630px] h-[630px]"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen mr-80 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Log in to continue your learning journey
          </h2>
          <div className="mt-6">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            className="mt-4 w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600"
            onClick={handleSignin}
          >
            🔐 Sign in
          </button>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm"></span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-orange-600 font-semibold hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
