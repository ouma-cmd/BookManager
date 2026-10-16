import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlChangeName(e) {
    setName(e.target.value);
  }
  function handlchangeEmail(e) {
    setEmail(e.target.value);
  }
  function handlChangePassword(e) {
    setPassword(e.target.value);
  }

  async function handlSubmiteRegister(e) {
    e.preventDefault();
    try {
      const responce = await api.post("/register", {
        name: name,
        email: email,
        password,
      });
      console.log("responce", responce.data.token);

      navigate("/login");
    } catch (error) {}
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

          <p className="text-gray-500 mt-2">Join us and discover new books</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={handlChangeName}
              placeholder="Enter your name"
              className="
              w-full rounded-xl
              border border-gray-200
              bg-gray-50
              px-4 py-3
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#3ECF8E]
              transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={handlchangeEmail}
              placeholder="Enter your email"
              className="
              w-full rounded-xl
              border border-gray-200
              bg-gray-50
              px-4 py-3
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#3ECF8E]
              transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={handlChangePassword}
              placeholder="Create a password"
              className="
              w-full rounded-xl
              border border-gray-200
              bg-gray-50
              px-4 py-3
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#3ECF8E]
              transition
              "
            />
          </div>

          {/* Button */}
          <button
            onClick={handlSubmiteRegister}
            className="
            w-full
            bg-[#3ECF8E]
            hover:bg-[#34b97d]
            text-white
            font-semibold
            py-3
            rounded-xl
            transition
            shadow-md
            hover:shadow-lg
            "
          >
            Create Account
          </button>
        </form>

        {/* Login link */}
        <div className="mt-8 text-center text-gray-500">
          Already have an account?
          <NavLink
            className="ml-1 text-[#16A36A] font-semibold hover:underline"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
