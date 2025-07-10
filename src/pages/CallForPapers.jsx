import React from "react";

export default function CallForPapers() {
  return (
    <div className="p-6 md:p-10 text-gray-800 dark:text-gray-100 dark:bg-gray-900 max-w-5xl mx-auto transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
        Call for Papers
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        <strong>
          International Journal of Media and Sustainable Development (IJMSD)
        </strong>{" "}
        is currently accepting submissions for its upcoming issue. We welcome
        original research papers, case studies, and review articles that explore
        the intersection of media, communication, and sustainable development
        across various disciplines.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-2 mt-6">
        Areas of Interest Include:
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-base">
        <li>Media and the UN Sustainable Development Goals (SDGs)</li>
        <li>
          Communication in health, education, agriculture, environment, and
          public policy
        </li>
        <li>Digital media, technology, and innovation</li>
        <li>Peace, conflict, and humanitarian communication</li>
        <li>Media policy, ethics, and governance</li>
        <li>Development communication and participatory media</li>
        <li>Gender, youth, and minority representation in media</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-2 mt-6">
        Important Dates:
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Submission Deadline:</strong> August 30, 2025
        </li>
        <li>
          <strong>Notification of Acceptance:</strong> September 20, 2025
        </li>
        <li>
          <strong>Publication Date:</strong> October 10, 2025
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-2 mt-6">
        Submission Guidelines:
      </h2>
      <p className="mb-4">
        Manuscripts should be original, unpublished, and written in English. All
        submissions must follow the{" "}
        <span className="font-semibold">APA 7th Edition referencing style</span>{" "}
        and be formatted as MS Word documents.
      </p>
      <p>
        Authors are encouraged to review our full submission guidelines before
        submitting. All manuscripts will undergo a rigorous peer-review process.
      </p>

      <div className="text-center mt-8">
        <a
          href="/submission"
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
        >
          Submit Your Paper
        </a>
      </div>
    </div>
  );
}
