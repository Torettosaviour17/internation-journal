import { Link } from "react-router-dom";
import AsideSection from "../components/AsideSection";
import teamMembers from "./EditorialTeamData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 pt-0 p-4 w-full">
      <div className="md:w-[80%] mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-[38px] font-bold mb-6 text-center text-blue-600">
          Welcome
        </h1>

        <div className="md:flex  w-full">
          <p className="w-full flex md:w-[80%]">
            International Journal of Media and Sustainable Development (IJMSD)
            is a peer-reviewed, interdisciplinary journal that promotes
            thought-provoking and solution-oriented scholarship that brings
            together media, communication, and sustainable development. It
            published academic research articles by academics, researchers,
            media practitioners, and postgraduate scholars from around the
            world, most especially developing and underdeveloped countries.
            IJMSD provides a platform for the contribution of innovative ideas
            and research findings that examines the intermeddlement between
            communication, media practices and sustainability goals in different
            and ever-changing contexts.{" "}
          </p>
          <img
            src="/interational-cover.jpg"
            alt="Journal Cover"
            className="w-[505] md:w-[15%]"
          />
        </div>

        <h2 className="text-2xl font-semibold my-2">Aims and Scope</h2>
        <p>
          IJMSD is a journal of communication, media, journalism and sustainable
          development that have value for developing and underdeveloped,
          especially in Sub-Saharan Africa. It aims to publish well-researched
          manuscripts in the areas of intersection between the Communication,
          Media Studies and Sustainable Development concerns around Political
          Science, Psychology, Sociology and Anthropology, International
          Relations and Diplomacy, Peace and Conflict Studies, Health,
          Education, Agriculture, Environment, Technology and Public Policy.
        </p>

        <Link
          to="/about-journal"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 mt-4"
        >
          Read More
        </Link>

        <h2 className="text-3xl font-bold mt-10 mb-6 text-center text-green-700">
          Current Issues
        </h2>

        {/* <>
          <h2 className="text-3xl font-bold mt-10 mb-6 text-center text-green-700">
            Meet Our Editorial Team
          </h2>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                    <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Visit Portfolio
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </> */}
      </div>

      <AsideSection />
    </div>
  );
}
