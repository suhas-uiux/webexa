import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, input.email, input.password);
      alert("Login successful!");
      navigate("/search");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      navigate("/search");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Login to your account
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.6 20.5h-1.9V20H24v8h11.2c-1.5 4-5.2 6.9-9.2 6.9-5.5 0-10-4.5-10-10s4.5-10 10-10c2.4 0 4.6.9 6.3 2.4l6.1-6.1C34.1 7.6 29.3 5.5 24 5.5 13.5 5.5 5 14 5 24.5S13.5 43.5 24 43.5c10.5 0 19-8.5 19-19 0-1.3-.1-2.5-.4-3.7z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.7 4.9C14.7 16.2 19 13.5 24 13.5c2.4 0 4.6.9 6.3 2.4l6.1-6.1C34.1 7.6 29.3 5.5 24 5.5c-6.6 0-12.2 3.8-15.1 9.2z"
              />
              <path
                fill="#4CAF50"
                d="M24 43.5c5.3 0 10.1-2 13.7-5.3l-6.3-5.2c-1.8 1.2-4.1 2-6.6 2-4 0-7.7-2.9-9.2-6.9l-6.7 5.2C11.8 39.7 17.4 43.5 24 43.5z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5h-1.9V20H24v8h11.2c-.7 2-2.1 3.7-4.1 4.9l6.3 5.2C42.1 36.2 45 28.4 45 20c0-1.3-.1-2.5-.4-3.7z"
              />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;