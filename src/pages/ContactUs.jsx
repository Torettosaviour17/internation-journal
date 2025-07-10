import AsideSection from "../components/AsideSection";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h1>
        <p className="text-lg mb-4">
          For all correspondence, inquiries, and manuscript submissions, please
          contact:
        </p>
        <p className="text-lg mb-2">
          <strong>Edikan Ukpong</strong>
          <br />
          <i>Managing Editor</i>
          <br />
          Lecturer, Department of Mass Communication <br />
          Ritman University, Ikot Ekpene, Nigeria
        </p>
        <p className="text-lg mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:viceddy2012@gmail.com"
            className="text-blue-600 underline"
          >
            viceddy2012@gmail.com
          </a>
        </p>
        <p className="text-lg">
          <strong>Phone:</strong>{" "}
          <a href="tel:+2347061585726" className="text-blue-600 underline">
            +234 706 158 5726
          </a>
        </p>
      </div>
      <div className="md:w-[30%] w-full">
        <AsideSection />
      </div>{" "}
    </div>
  );
}
