import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="">
            <h2>
                Log in to continue your learning journey
            </h2>
            <div className="">
                <label htmlFor="" className="">Email</label>
                <input type="email"
                placeholder='Email'
                className=''
                 />

            </div>

            <button className="">
                Log in
            </button>

            <div className="">
                <p>Don't have an account? <a href="/signup" className="text-purple-600 font-semibold hover:underline">
              Sign up
            </a>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Login


