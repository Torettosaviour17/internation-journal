import { Link } from "react-router-dom";
import AsideSection from "../components/AsideSection";
import teamMembers from "./EditorialTeamData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !isMobile,
    adaptiveHeight: true,
  };

  return (
    <div className="flex flex-col md:flex-row pt-0 p-4 w-full ">
      <div className="md:w-[70%] w-full md:pl-6 px-2 text-gray-800">
        <h1 className="text-3xl md:text-[38px] font-bold mt-5 mb-6 text-center text-blue-600">
          Welcome to IJMSD
        </h1>

        <div className="flex flex-col md:flex-row gap-4 w-full items-center mb-8">
          <div className="md:w-3/4 w-full">
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-semibold">
                International Journal of Media and Sustainable Development
                (IJMSD)
              </span>
              is a peer-reviewed, interdisciplinary journal that promotes
              thought-provoking and solution-oriented scholarship that brings
              together media, communication, and sustainable development. It
              publishes academic research articles by academics, researchers,
              media practitioners, and postgraduate scholars from around the
              world, with special focus on developing and underdeveloped
              countries. IJMSD provides a platform for innovative ideas and
              research findings that examine the interplay between
              communication, media practices and sustainability goals in diverse
              and evolving contexts.
            </p>
          </div>
          <div className="md:w-1/4 w-1/2 flex justify-center">
            <img
              src="/interational-cover.jpg"
              alt="Journal Cover"
              className="w-full max-w-[200px] md:max-w-none shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Aims and Scope
          </h2>
          <p className="mb-4 text-base md:text-lg">
            IJMSD is a journal of communication, media, journalism and
            sustainable development with particular relevance for developing and
            underdeveloped regions, especially in Sub-Saharan Africa. It aims to
            publish well-researched manuscripts in the areas of intersection
            between Communication, Media Studies and Sustainable Development
            concerns around Political Science, Psychology, Sociology and
            Anthropology, International Relations and Diplomacy, Peace and
            Conflict Studies, Health, Education, Agriculture, Environment,
            Technology and Public Policy.
          </p>
          <Link
            to="/about-journal"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 mt-2"
          >
            Read More
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">
            Current Issues
          </h2>
          <p className="text-lg">
            The maiden edition (Vol. 1, Number 1, August 2025) of the
            International Journal of Media and Sustainable Development (IJMSD)
            is now open for submissions. Accepted papers for this edition will
            be published and made available online soon.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((issue) => (
              <div
                key={issue}
                className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">
                      Volume 12, Issue {issue}
                    </h3>
                    <p className="text-gray-600 text-sm">Spring 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  This issue features cutting-edge research on media's role in
                  sustainable development across various sectors.
                </p>
                <button className="text-blue-600 font-medium hover:underline">
                  View Issue →
                </button>
              </div>
            ))}
          </div> */}
        </div>

        <div className="mt-10 md:pb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-700">
            Meet Our Editorial Team
          </h2>
          <div className="slider-container px-2">
            <Slider {...settings} className="mb-6 md:mb-0">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-2 mb-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="flex justify-center pt-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <div className="p-4 text-center flex-grow">
                      <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-green-600 font-medium mb-2">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="md:w-[30%] w-full">
        <AsideSection />
      </div>
    </div>
  );
}
