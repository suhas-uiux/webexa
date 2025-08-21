import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { createUserWithEmailAndPassword } from "firebase/auth";
// filepath: c:\webxaauth\webexa\src\components\Create_account.jsx
const Create_account = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (input.password !== input.confirm_password) {
    alert("Passwords do not match!");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, input.email, input.password);
    alert("Account created successfully!");
    navigate("/login");
  } catch (error) {
    alert(error.message);
  }
};
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Create your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              value={input.confirm_password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Confirm your password"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create_account;