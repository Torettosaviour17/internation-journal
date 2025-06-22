import { Link } from "react-router-dom";
import AsideSection from "../components/AsideSection";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-0 p-4 w-full">
      <div className="md:w-[80%] mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-[38px] font-bold mb-6 text-center text-blue-600">
          Welcome
        </h1>

        <div className="flex w-full">
          <p className="w-[80%]">
            International Journal of Media and Sustainable Development (IJMSD) is
            a peer-reviewed, interdisciplinary journal that promotes
            thought-provoking and solution-oriented scholarship that brings
            together media, communication, and sustainable development. It
            publishes academic research articles by academics, researchers,
            media practitioners, and postgraduate scholars from around the
            world, most especially developing and underdeveloped countries.
            IJMSD provides a platform for the contribution of innovative ideas
            and research findings that examine the intermeddlement between
            communication, media practices and sustainability goals in different
            and ever-changing contexts.
          </p>
          <img
            src="/interational-cover.jpg"
            alt="Journal Cover"
            className="w-[15%]"
          />
        </div>

        <h2 className="text-2xl font-semibold my-2">Aims and Scope</h2>
        <p>
          IJMSD is a journal of communication, media, journalism and
          sustainable development that has value for developing and
          underdeveloped countries, especially in Sub-Saharan Africa. It aims to publish
          well-researched manuscripts in the areas of intersection between
          Communication, Media Studies and Sustainable Development concerns
          around Political Science, Psychology, Sociology and Anthropology,
          International Relations and Diplomacy, Peace and Conflict Studies,
          Health, Education, Agriculture, Environment, Technology and Public
          Policy.
        </p>

        {/* Read More Button */}
        <Link
          to="/about-journal"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 mt-4"
        >
          Read More
        </Link>
      </div>

      <AsideSection />
    </div>
  );
}
