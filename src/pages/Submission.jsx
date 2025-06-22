import AsideSection from "../components/AsideSection";

export default function AboutSubmission() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="w-[80%] pr-0 mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          ABOUT SUBMISSION
        </h1>
        <div className="">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Manuscript Format</h2>
            <p>Papers must be assembled in this order: Title page, Abstract, Introduction, Methods, Results, Discussion, Conclusion, Ethical Clearance, Acknowledgements, Sources of Funding, Conflict of Interest, Authors contributions, References.</p>
            <p><span className="font-semibold">Introduction:</span> This should be concise and state the background and clear objective of the paper.</p>
            <p><span className="font-semibold">Methods:</span> This should be clear enough for another researcher to be able to replicate the study.</p>
            <p><span className="font-semibold">Results:</span> The result should be presented in logical sequence in the text, tables, figures, charts or other illustrations. Do not repeat in the text all the data in the tables and illustrations. Emphasise or summarise only important observations.</p>
            <p><span className="font-semibold">Discussion:</span> This should cover pertinent issues from the introduction and mainly the results.</p>
            <p><span className="font-semibold">Conclusion:</span> As much as is possible, a relevant conclusion from the results should be stated.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Length of Manuscripts</h2>
            <p>Full-length articles should not exceed 5,000 words and should not be less than 3,500 words including the title page, abstract and references. An article should not exceed 10 authors and not more than six tables or figures. References should not exceed 25 and should not be less than 10. Except in rare circumstances, references and literature citations should not be above 10 years.</p>
          </div>

          <div>
            <h2 className=" text-2xl font-semibold mb-2s">Formatting</h2>
            <p>Manuscripts should be written in British (UK) English and typed in a single line spacing, Times New Roman, 12-point font including references, figures and tables with 2.5cm margins from each edge on one side of a white A4 paper. All manuscript pages including the title page must be numbered. All illustrations, figures, and tables should be placed within the text at the appropriate points in numerical order, rather than at the end.</p>
          </div>

          <div>
            <h2 className="font-bold">Title Page</h2>
            <p>This should contain the following information:</p>
            <ul className="list-disc list-inside">
              <li>Title of the paper which should be concise, and informative, should not exceeding 25 words and should not contain abbreviations.</li>
              <li>The title page should also include names, affiliations and addresses of all the authors and complete contact information of the corresponding author including telephone number and e-mail address. We also require the email addresses of all authors. On acceptance, the list of authors will not change.</li>
              <li>Source(s) of funding including grants, and equipment (where applicable).</li>
              <li>Word count for paper text (excluding its abstract and references) and a separate word count for the abstract is required.</li>
              <li>Conflict of interest declaration</li>
              <li>Authors’ contributions (a short note stating specific areas handled by each of the co-author. It should also affirm that all the authors have read and approved the manuscript for publication, and they have collectively conferred the rights to the corresponding author to make necessary changes required by editorial team of the journal, do the rest of correspondence and act as the guarantor for the manuscript on their behalf.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Abstract</h2>
            <p>The abstract must not exceed 200 words and should accurately reflect the content of the article, emphasising its important findings and limitations and must be structured as follows: Background, Objectives, Methods, Results, and Conclusions.</p>
            <p><span className="font-semibold">Keywords:</span> The abstract must be accompanied by four to five keywords preferably terms not used in the title.</p>
            <p><span className="font-semibold">Abbreviations:</span> All abbreviations must be spelt out when initially used, and thereafter consistently used. Abbreviations should not be used in the title or abstract.</p>
          </div>

          <div>
            <h2 className=" font-bold ">Figures, Tables and illustrations</h2>
            <p>Tables should be self-explanatory and should not duplicate textual materialsThey should be of reproducible quality, include comprehensive captions and not duplicate of materials presented in the text. All illustrations (tables and figures) must be cited consecutively in the text. Avoid internal vertical or horizontal lines in tables. They should be numbered in Roman numeral, consecutively in the order of their first citation in the text and supply a brief of each text. Explain in footnotes all non-standard abbreviations that are used in each table. Any figures should be professionally designed and submitted as original copies, or obtain permission for all fully borrowed, adapted and modified tables and provide a credit line in the footnote. Illustrations should be sharp and clear, preferably in JPEG format. Authors will be requested to pay for coloured illustration in the case of journal hard copy.</p>
          </div>

          <div>
            <h2 className="font-semibold">Authorship</h2>
            <p>Authorship of an article should be based on the following:</p>
            <ul className="list-disc list-inside">
              <li>Substantial contribution to the conceptualisation, design, data collection, analysis and interpretation.</li>
              <li>Drafting and/or critical revision of the article for important intellectual contents.</li>
              <li>Approval of the final version to be published.</li>
              <li>Accountability for all aspects of the work, ensuring that all issues related to the accuracy and integrity of the article are properly addressed.</li>
            </ul>
          </div>

          <div>
            <h2 className=" font-semibold">Conflict of Interest</h2>
            <p>Authors are required to disclose all financial and personal connections that may constitute a conflict of interest. More information can be obtained from the Council of Science Editors’ (CSE) white paper on promoting integrity in scientific journal publications, 2012 update at www.councilscienceditors.org.
Acknowledgements
</p>
          </div>

          <div>
            <h2 className="font-semibold">Acknowledgements</h2>
            <p>Acknowledgements of general support, grants, technical assistance should be indicated. Authors are responsible for obtaining the consent of those acknowledged.</p>
          </div>

          <div>
            <h2 className=" font-semibold mb-2">References: (APA Style 7th Edition)</h2>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Submission Preparation Checklist</h2>
            <p>As part of the submission process, authors are required to check off their submission’s compliance with all of the following items, as submissions may be returned to authors who do not adhere to these guidelines.
The submission has not been previously published, nor is it before another journal for consideration.
The submission file is in Microsoft Word file format.
Complete names, addresses, highest degrees, institutions, title, telephone number, and e-mail for each author with that of the corresponding author clearly specified.
Conflict of interest disclosure.
Manuscript does not exceed 5,000 words and not less than 3,500 words, including the title page, abstract and references.
Manuscript does not exceed 10 authors and not more than six tables or figures.
References and literature citations do not exceed 25 and not less than 10, and they are not above 10 years except in rare situations.
Where available, URLs for references have been provided.
Manuscript is written in British (UK) English and typed in a single line spacing, Times New Roman, 12-point font including references, figures and tables with 2.5cm margins from each edge on one side of a white A4 paper, and manuscript pages including the title page are numbered.
The text employs italics where necessary, rather than underlining (except with URL addresses); and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.
The text adheres to the stylistic and bibliographic requirements of the Journal seen on this page.
.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Declarations</h2>
            <p>All manuscripts must contain the following sections (compulsory):</p>
            <ul className="list-disc list-inside">
              <li>Ethical clearance</li>
              <li>Acknowledgements</li>
              <li>Sources of funding</li>
              <li>Conflict of interest</li>
              <li>Authors’ Contributions</li>
              <li>Availability of data and materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">How to Submit</h2>
            <p>Manuscript should be submitted as a Microsoft Word attachment via electronic mail to: The Editor-in-Chief, International Journal of Sub-Saharan African Research (IJSSAR) through editorijssar@gmail.com or kenadibenwafor@gmail.com. Authors can also register as users and follow the instructions to submit their manuscripts. A manuscript Identification (ID) number shall be sent to the corresponding author upon receipt of the manuscript. Submitted manuscript must be an original contribution not previously published (except as an abstract in a conference), must not be under consideration for publication elsewhere, and, if accepted for publication in the IJSSAR, must not be published elsewhere in a similar form, in any language unless with the written permission of the Editor-in-Chief and Publishers of IJSSAR. Each person listed as an author is expected to have participated in the study to a significant extent and should indicate clearly his/her role in the manuscript and agrees with submission of the paper for publication.</p>
          </div>

          <div>
            <h2 className=" font-bold">Copyright Notice</h2>
            <p>Authors retain the copyright and full publishing rights of all accepted manuscripts without restrictions.</p>
          </div>

          <div>
            <h2 className=" font-bold">Privacy Statement</h2>
            <p>The names and email addresses entered in this journal site will be used exclusively for the stated purposes of this journal and will not be made available for any other purpose or to any other party.</p>
          </div>

          <div>
            <h2 className="font-bold 2">Abridged License Agreement between Authors and IJMSD</h2>
            <p>I submitted my manuscript to International Journal of Media and Sustainable Development (IJMSD) on the ground that I am willingly to affirm that I am authorised by my co-authors to enter into these agreements. I therefore, guarantee, on behalf of self and co-authors:
That the paper is original, and has not been published in any other peer-reviewed journal; nor is it under consideration by other journal (s). It does not infringe existing copyright or any other person's rights
That we are/I am the sole author(s) of the paper and with authority to enter into this agreement. My granting rights to International Journal of Media and Sustainable Development (IJMSD) is not in breach of any other obligation
That the paper contains nothing unlawful, or libellous, nor anything that would constitute a breach of contract, confidence or commitment given to secrecy, if published
That I/we have taken care to ensure the integrity of the article.
</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Journal Identifiers</h2>
            <p>eISSN: Coming soon<br/>pISSN: Coming soon</p>
          </div>
        </div>
      </div>
      <AsideSection />
    </div>
  );
}
