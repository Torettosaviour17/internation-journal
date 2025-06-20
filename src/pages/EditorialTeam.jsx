import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jane Doe",
    position: "Managing Editor",
    image: "https://via.placeholder.com/300x300?text=Jane+Doe",
    bio: "Passionate about media and sustainable development research.",
  },
  {
    name: "John Smith",
    position: "Reviewer",
    image: "https://via.placeholder.com/300x300?text=John+Smith",
    bio: "Expert in media analysis and peer review processes.",
  },
  {
    name: "Dr. Lisa Green",
    position: "Senior Editor",
    image: "https://via.placeholder.com/300x300?text=Lisa+Green",
    bio: "Focused on environmental and communication studies.",
  },
  {
    name: "Toretto Saviour",
    position: "Frontend Developer",
    image: "/team/toretto.jpg", // put your image in public/team/toretto.jpg
    bio: "Bringing ideas to life with code. Reach me via my portfolio.",
    portfolio: "https://torettosaviourportfolio.vercel.app", // Your placeholder portfolio link here
  },
  {
    name: "Michael Lee",
    position: "Editorial Assistant",
    image: "https://via.placeholder.com/300x300?text=Michael+Lee",
    bio: "Supports submission handling and author correspondence.",
  },
];

export default function EditorialTeam() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">
        Meet Our Editorial Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-700">
                {member.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm mb-2">{member.bio}</p>
              {/* Show Portfolio link only for Toretto */}
              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 text-sm hover:underline"
                >
                  Visit Portfolio
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
