import { Link } from "react-router-dom";

export default function AsideSection() {
  return (
    <aside className="w-full md:w-1/4 p-4 space-y-6">
      {/* Latest News */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          Latest News
        </h2>
        <div className="space-y-4">
          <div>
            <Link
              to="/call-for-papers"
              className="text-blue-600 font-medium hover:underline"
            >
              Call for Papers
            </Link>
            <p className="text-sm text-gray-600">
              The International Journal of Media and Sustainable Development
              (IJMSD) is calling for papers for publication in the next issue.
              Read more...
            </p>
          </div>
          <div>
            <Link
              to="/indexed"
              className="text-blue-600 font-medium hover:underline"
            >
              IJMSD now indexed
            </Link>
            <p className="text-sm text-gray-600">
              The Editorial Team is excited to announce the journal indexing.
              Read more...
            </p>
          </div>
          <div>
            <Link
              to="/doi"
              className="text-blue-600 font-medium hover:underline"
            >
              IJMSD Now Publishes with DOI
            </Link>
            <p className="text-sm text-gray-600">
              We now provide DOIs for all articles published. Read more...
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          Quick Links
        </h2>
        <ul className="list-disc list-inside space-y-2 text-blue-600">
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
            <Link to="/guidelines" className="hover:underline">
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
    </aside>
  );
}
