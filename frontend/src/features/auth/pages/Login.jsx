import { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import api from "../../../api/auth";

export default function Login() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlPasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handlSubmite(e) {
    e.preventDefault();
    try {
      const responce = await api.post("/login", {
        email: Email,
        password,
      });

      localStorage.setItem("token", responce.data.token);
      localStorage.setItem("user", JSON.stringify(responce.data.user));

      const role = responce.data.user.role;

      console.log("ROLE:", role);

      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/booksUsers");
      }
    } catch (error) {
      console.log("BACKEND MESSAGE:", error.response?.data);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to discover amazing books</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={Email}
              onChange={handlEmailChange}
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
              onChange={handlPasswordChange}
              placeholder="Enter your password"
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
            onClick={handlSubmite}
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
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-8 text-center text-gray-500">
          Don't have an account?
          <NavLink
            className="ml-1 text-[#16A36A] font-semibold hover:underline"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
