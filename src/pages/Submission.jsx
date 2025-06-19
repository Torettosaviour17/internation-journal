export default function Submission() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Submission</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Manuscript Format</h2>
      <p className="mb-4">
        Papers must be assembled in this order: Title page, Abstract,
        Introduction, Methods, Results, Discussion, Conclusion, Ethical
        Clearance, Acknowledgements, Sources of Funding, Conflict of Interest,
        Authors contributions, References.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Introduction:</strong> Concise background and clear objective.
        </li>
        <li>
          <strong>Methods:</strong> Clear for reproducibility.
        </li>
        <li>
          <strong>Results:</strong> Logical sequence using text, tables, charts.
        </li>
        <li>
          <strong>Discussion:</strong> Cover pertinent issues from introduction
          & results.
        </li>
        <li>
          <strong>Conclusion:</strong> State relevant conclusion from results.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Length of Manuscripts</h2>
      <p className="mb-4">
        Articles: 3,500–5,000 words, max 10 authors, max six tables/figures,
        references: 10–25 (preferably within the last 10 years).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Formatting</h2>
      <p className="mb-4">
        British (UK) English, Times New Roman, 12pt, single-spaced, 2.5cm
        margins, A4 paper. Pages numbered. Figures/tables placed within text.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Title Page Requirements
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Concise title (max 25 words, no abbreviations)</li>
        <li>Author names, affiliations, emails</li>
        <li>Funding sources</li>
        <li>Word count (text and abstract separately)</li>
        <li>Conflict of interest & authors’ contributions</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Abstract</h2>
      <p className="mb-4">
        Max 200 words with: Background, Objectives, Methods, Results,
        Conclusions. 4–5 keywords required.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Figures, Tables & Illustrations
      </h2>
      <p className="mb-4">
        Tables self-explanatory, non-duplicative, Roman numerals for numbering,
        JPEG preferred for figures.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Authorship Criteria</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Conceptualisation, data, analysis contribution</li>
        <li>Drafting & critical revision</li>
        <li>Approval of final version</li>
        <li>Accountability for all work aspects</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Conflict of Interest</h2>
      <p className="mb-4">
        All personal/financial ties must be disclosed as per CSE guidelines.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Acknowledgements</h2>
      <p className="mb-4">
        Acknowledge general support, grants, technical help, with consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">References</h2>
      <p className="mb-4">APA Style 7th Edition required.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Submission Preparation Checklist
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Not published elsewhere.</li>
        <li>MS Word format.</li>
        <li>Full author details provided.</li>
        <li>Conflict of interest disclosed.</li>
        <li>Word & figure/table limits observed.</li>
        <li>Recent & adequate references.</li>
        <li>British English, proper formatting applied.</li>
        <li>APA citation style followed.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Declarations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ethical Clearance</li>
        <li>Acknowledgements</li>
        <li>Sources of Funding</li>
        <li>Conflict of Interest</li>
        <li>Authors’ Contributions</li>
        <li>Data Availability</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How to Submit</h2>
      <p className="mb-4">
        Submit via email:{" "}
        <a
          href="mailto:editorijssar@gmail.com"
          className="text-blue-600 underline"
        >
          editorijssar@gmail.com
        </a>{" "}
        or{" "}
        <a
          href="mailto:kenadibenwafor@gmail.com"
          className="text-blue-600 underline"
        >
          kenadibenwafor@gmail.com
        </a>
        . Manuscript ID will be issued after receipt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Copyright Notice</h2>
      <p className="mb-4">Authors retain full rights on accepted papers.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Privacy Statement</h2>
      <p className="mb-4">Emails/names used only for journal purposes.</p>
    </div>
  );
}
