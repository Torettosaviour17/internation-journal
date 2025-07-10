import { useState } from "react";
import AsideSection from "../components/AsideSection";

export default function MakeSubmission() {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    email: "",
    manuscript: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Submission Received! We'll get back to you soon.");
    setFormData({
      title: "",
      authorName: "",
      email: "",
      manuscript: null,
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="w-full md:w-[80%] mx-auto p-6 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-400 text-center">
          Make A Submission
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-6 shadow-md rounded-lg space-y-4 transition-colors duration-300"
        >
          <div>
            <label className="block font-semibold mb-2">Paper Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Upload Manuscript (PDF/Doc)
            </label>
            <input
              type="file"
              name="manuscript"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Submit Paper
          </button>
        </form>
      </div>

      <div className="md:w-[30%] w-full">
        <AsideSection />
      </div>
    </div>
  );
}
