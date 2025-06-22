import AsideSection from "../components/AsideSection";

export default function Archives() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="w-[80%] pr-0 mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Archives</h1>
        <p className="text-lg">
          No archived issues are available yet. Please check back after our
          maiden edition is published.
        </p>
      </div>
      <AsideSection />
    </div>
  );
}
