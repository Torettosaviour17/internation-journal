import AsideSection from "../components/AsideSection";

export default function Archives() {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-0 p-4 w-full">
      <div className="md:w-[80%] mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Archives</h1>
        <p className="text-lg">
          No archived issues are available yet. Please check back after our
          maiden edition is published.
        </p>
      </div>
      <div className="md:w-[30%] w-full">
        <AsideSection />
      </div>{" "}
    </div>
  );
}
