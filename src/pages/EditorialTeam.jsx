import teamMembers from "./EditorialTeamData";
import { motion } from "framer-motion";

export default function EditorialTeam() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700 dark:text-green-400">
        Meet Our Editorial Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {member.position}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {member.bio}
              </p>
              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
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
