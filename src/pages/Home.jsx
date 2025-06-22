import AsideSection from "../components/AsideSection";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-0 p-4 w-full">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-[38px] font-bold mb-6 text-center text-blue-600">
          Welcome
        </h1>

        <p>
            International Journal of Media and Sustainable Development (IJMSD) is
            a peer-reviewed, interdisciplinary journal that promotes
            thought-provoking and solution-oriented scholarship that brings
            together media, communication, and sustainable development. It
            published academic research articles by academics, researchers,
            media practitioners, and postgraduate scholars from around the
            world, most especially developing and underdeveloped countries.
            IJMSD provides a platform for the contribution of innovative ideas
            and research findings that examines the intermeddlement between
            communication, media practices and sustainability goals in different
            and ever-changing contexts.
          </p>

          <h2 className="text-2xl font-semibold my-2">Aims and Scope</h2>
          <p>
            IJMSD is a journal of communication, media, journalism and
            sustainable development that have value for developing and
            underdeveloped, especially in Sub-Saharan Africa. It aims to publish
            well-researched manuscripts in the areas of intersection between the
            Communication, Media Studies and Sustainable Development concerns
            around Political Science, Psychology, Sociology and Anthropology,
            International Relations and Diplomacy, Peace and Conflict Studies,
            Health, Education, Agriculture, Environment, Technology and Public
            Policy.
          </p>
        
      </div>
      <AsideSection />
    </div>
  );
}
