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
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="md:w-[70%] w-full flex justify-center items-start bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-md border border-red-100 dark:border-gray-700 p-5 md:p-8 rounded-md w-full md:w-[70%]">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-100">
            Create An Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500"
              >
                Register
              </button>

              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="md:w-[30%] w-full">
        <AsideSection />
      </div>
    </div>
  );
}
