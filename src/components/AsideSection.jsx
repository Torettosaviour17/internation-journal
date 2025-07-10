import { Link } from "react-router-dom";

export default function AsideSection() {
  return (
    <aside className="w-full md:w-[80%] p-4 space-y-6">
      {/* Latest News */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Latest News
        </h2>
        <div className="space-y-4">
          <div>
            <Link
              to="/call-for-papers"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Call for Papers
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              The International Journal of Media and Sustainable Development
              (IJMSD) is calling for papers for publication in the next issue.
              Read more...
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Quick Links
        </h2>
        <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400">
          <li>
            <Link to="/submission" className="hover:underline">
              Make A Submission
            </Link>
          </li>
          <li>
            <Link to="/archives" className="hover:underline">
              Past Issues
            </Link>
          </li>
          <li>
            <Link to="/submissions" className="hover:underline">
              Authors' Guidelines
            </Link>
          </li>
          <li>
            <Link to="/editorial-team" className="hover:underline">
              Editorial Team
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Box */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Search
        </h2>
        <input
          type="text"
          placeholder="Enter keywords....."
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
          Search
        </button>
      </div>

      {/* Indexing Info */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Indexing
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          IJMSD is indexed in the following databases:
        </p>
        <ul className="list-disc list-inside space-y-1 text-blue-600 dark:text-blue-400">
          <li>DOAJ: Directory of Open Access Journal</li>
          <li>Coming Soon</li>
          <li>Google Scholar</li>
        </ul>
      </div>

      {/* Journal Cover Download */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 text-center">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Journal Cover
        </h2>
        <Link
          to="/interational-cover.jpg"
          target="_blank"
          download
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 inline-block"
        >
          Download here
        </Link>
      </div>
    </aside>
  );
}
