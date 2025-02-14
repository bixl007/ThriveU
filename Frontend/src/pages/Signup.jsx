const Signup = () => {
  return (

    <div className="flex h-screen w-full justify-between">
      <div className="w-full h-screen flex justify-center items-center">
        <img src="https://img.freepik.com/premium-vector/climate-change-abstract-concept-vector-illustration_107173-24294.jpg" alt="logo" className="w-[630px] h-[630px]" />
      </div>
    <div className="flex items-center justify-center min-h-screen mr-80 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
        Register to continue your learning journey
        </h2>

        <div className="mt-6">
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mt-6">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="email"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

      
        <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600">
        🔐 Signup
        </button>

        
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm"></span>
          <hr className="flex-grow border-gray-300" />
        </div>


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