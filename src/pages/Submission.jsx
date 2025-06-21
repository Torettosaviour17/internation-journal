import AsideSection from "../components/AsideSection";

export default function Submission() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="md:w-[80%]  mx-auto md:pl-6 p-6 px-2 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Guidelines for Submission of Manuscripts
        </h1>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>
            An electronic copy of the manuscript (preferably as an MS Word
            attachment) should be submitted to the Editor-in-Chief via the
            journal email address.
          </li>
          <li>
            Papers should bear the <strong>title</strong>,{" "}
            <strong>name of author(s)</strong>,{" "}
            <strong>institutional affiliation</strong>, <strong>email</strong>,
            and <strong>phone numbers</strong>.
          </li>
          <li>
            Manuscripts should be prepared according to the{" "}
            <strong>
              7th edition of the American Psychological Association (APA)
            </strong>{" "}
            publication manual.
          </li>
          <li>
            Contributors should provide a brief headnote (abstract) of about{" "}
            <strong>150–200 words</strong>.
          </li>
          <li>
            Manuscripts should not exceed <strong>20 pages</strong> in length
            and must be typed in <strong>double line spacing</strong> on{" "}
            <strong>A4 size paper</strong>.
          </li>
          <li>
            Use <strong>Times New Roman, 12pt font size</strong>.
          </li>
          <li>
            Only original manuscripts written in{" "}
            <strong>English (British spelling style)</strong> will be
            considered.
          </li>
          <li>
            Manuscripts must <strong>not have been previously published</strong>
            , nor be under <strong>simultaneous review elsewhere</strong>.
          </li>
          <li>
            Submissions must be accompanied by a{" "}
            <strong>non-refundable peer-review fee of ₦5,000</strong>. Accepted
            papers will attract a <strong>publication fee of ₦20,000</strong>.
          </li>
          <li>
            All articles will undergo <strong>plagiarism checks</strong>. Only
            papers with a similarity index not exceeding <strong>20%</strong>{" "}
            will be considered.
          </li>
          <li>
            Submit articles via email:{" "}
            <a
              href="mailto:ijmsdjournal@gmail.com"
              className="text-blue-600 underline"
            >
              ijmsdjournal@gmail.com
            </a>
            <br />
            Journal website:{" "}
            <a
              href="http://ijmsd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              http://ijmsd.com
            </a>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-700">
          For Further Inquiries
        </h2>
        <p className="text-lg mb-2">
          <strong>Contact:</strong> Dr George Udoh
        </p>
        <p className="text-lg mb-2">
          Lecturer, Department of Mass Communication
          <br />
          Ritman University, Ikot Ekpene, Akwa Ibom State, Nigeria
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
