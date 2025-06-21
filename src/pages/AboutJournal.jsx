import AsideSection from "../components/AsideSection";

export default function AboutJournal() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          About the Journal
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          The{" "}
          <strong>
            International Journal of Media and Sustainable Development (IJMSD)
          </strong>
          is a peer-reviewed, interdisciplinary journal that seeks to promote
          rigorous scholarship at the intersection of media, communication, and
          sustainable development.
        </p>
        <p className="mb-4">
          This maiden edition invites submissions from academics, researchers,
          media practitioners, and postgraduate scholars from around the world,
          especially from developing and underdeveloped countries. IJMSD
          provides a platform for the exchange of innovative ideas and research
          findings that explore the dynamic relationship between media practices
          and sustainability goals in various contexts.
        </p>
      </div>
      <AsideSection />
    </div>
  );
}
