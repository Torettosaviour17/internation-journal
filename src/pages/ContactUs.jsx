import AsideSection from "../components/AsideSection";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="w-[80%] mx-auto p-6 pr-0 p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h1>
        <p className="text-lg mb-4">
          For all correspondence, inquiries, and manuscript submissions, please
          contact:
        </p>
        <p className="text-lg mb-2">
          <strong>Dr George Udoh</strong>
          <br />
          Lecturer, Department of Mass Communication <br />
          Ritman University, Ikot Ekpene, Akwa Ibom State, Nigeria
        </p>
        <p className="text-lg mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ijmsdjournal@gmail.com"
            className="text-blue-600 underline"
          >
            ijmsdjournal@gmail.com
          </a>
        </p>
        <p className="text-lg">
          <strong>Phone:</strong>{" "}
          <a href="tel:+2347061585726" className="text-blue-600 underline">
            +234 706 158 5726
          </a>
        </p>
      </div>
      <AsideSection />
    </div>
  );
}
