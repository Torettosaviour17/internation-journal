import AsideSection from "../components/AsideSection";

export default function Archives() {
  const articles = [
    {
      title:
        "Promoting Gender Equality through Women Co-operatives in Enugu State, Nigeria",
      authors: "Charles Chukwudi Nwabuike, John Isiagu & Ngozi Amaka Nwakeze",
      pages: "59-70",
      pdfLink: "#", // Change this to real PDF URL later
    },
    {
      title:
        "Generation Z and the Paradox of Trust in Mediated Interactions: Interpretative Journalism Perspective",
      authors: "Nicholas Omoko & Osemhantie Amos Okhueleigbe",
      pages: "71-84",
      pdfLink: "#",
    },
    {
      title:
        "Impact of Education in Juvenile Crime Prevention and Youth Development in Nigeria",
      authors: "Emmanuel Ngele, Paul Amoke, Emmanuel Okom & Fidelis Aboh",
      pages: "85-97",
      pdfLink: "#",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Archives</h1>

        {articles.map((article, index) => (
          <div key={index} className="mb-6 border-b border-dotted pb-4">
            <h2 className="text-blue-700 font-semibold text-lg hover:underline cursor-pointer">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{article.authors}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">
                PAGES: {article.pages}
              </span>
              <a
                href={article.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
      <AsideSection />
    </div>
  );
}
