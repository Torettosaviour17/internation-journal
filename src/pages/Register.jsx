import { useState } from "react";
import { Link } from "react-router-dom";
import AsideSection from "../components/AsideSection";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add form validation or API request here
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="w-[70%] flex justify-center items-start  bg-gray-50">
        <div className="bg-white shadow-md border border-red-100 p-8 rounded-md w-[70%] l">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Create An Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name:</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Register
              </button>

              <Link
                to="/login"
                className="text-blue-600 text-sm hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <AsideSection />
    </div>
  );
}
