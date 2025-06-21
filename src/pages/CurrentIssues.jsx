import AsideSection from "../components/AsideSection";

export default function CurrentIssues() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          Current Issues
        </h1>
        <p className="text-lg">
          The maiden edition (Vol. 1, Number 1, August 2025) of the
          International Journal of Media and Sustainable Development (IJMSD) is
          now open for submissions. Accepted papers for this edition will be
          published and made available online soon.
        </p>
      </div>
      <AsideSection />
    </div>
  );
}
