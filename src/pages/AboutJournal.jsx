import AsideSection from "../components/AsideSection";

export default function AboutJournal() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="w-[80%] pr-0 mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          ABOUT THE JOURNAL
        </h1>

        <div>
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

          <h2 className="text-2xl font-semibold mb-2">Aims and Scope</h2>
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

          <h2 className="text-2xl font-semibold mb-2">Open Access Policy</h2>
          <p>
            The International Journal of Media and Sustainable Development
            (IJMSD) provides immediate and open access to its contents on the
            principle that making research freely available to the public
            supports a greater global exchange of knowledge. The contents are
            therefore openly accessible to readers worldwide under the Creative
            Common CCBY-NC-SA 4.0 International Open Access License Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Publication Schedule</h2>
          <p>
            The journal publishes quarterly in the months of March, June,
            September and December.
          </p>

          <h2 className="font-semibold">Focus</h2>
          <p>Interdisciplinary (with emphasis on Sustainable Development)</p>

          <h2 className="text-2xl font-semibold mb-2">Charges</h2>
          <p>
            There is a Paper Assessment Charge (PAC) of N5,000 for contributors
            within Nigeria and its equivalent $100 for authors outside Nigeria
            to cover the cost of review for the paper. After which for accepted
            submission, there is Article Processing Charge (APC) of N20,000 for
            contributors within Nigeria and its equivalent $100 for authors
            outside Nigeria. These charges enables the smooth and consistent
            running of the journal. It is also the journal’s only source of
            revenue. IJMSD is NOT subscription based and does not accept paid
            advertisements on its website.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Peer Review</h2>
          <p>
            IJMSD adopts a double-blind peer review system. Before the blind
            peer reviews which are assigned to external assessors, every
            manuscript received is first assessed internally by members of the
            Editorial Board on the basis of adherence to scope, house style and
            authors’ guidelines. Manuscripts that do not meet the criteria are
            returned to the author(s) while successful ones are assigned two
            external peer reviewers on blind basis. Reviewers are provided with
            review guidelines and given a time limit of 21 working days within
            which to review and return the manuscript with their comments to the
            journal Editor. Reviewers have the option to either recommend:
            <br />
            ‘Publish as it is’
            <br />
            ‘Publish with minor revision’
            <br />
            ‘Publish with moderate revision’
            <br />
            ‘Requires major revision’ or
            <br />
            ‘Reject on grounds of … (Please be specific)’
            <br />
            If the decision is for revision, authors are allotted 14 working
            days to send back their revised manuscripts to the Editor. If the
            authors or reviewers need more time, the time could be extended. Our
            reviewers are Professors (or at least Associate Professors or
            Readers) drawn from reputable universities in Africa and the
            Diaspora who are specially selected in consideration of their areas
            of specialty. To ensure quality job, reviewers are paid a stipend of
            N5000 for each manuscript well reviewed. No reviewer reviews more
            than one manuscript in an edition of the journal. The entire process
            of review and revision takes 8-10 weeks. The Editorial team reserves
            the right to make any necessary changes in the manuscript until they
            are satisfied with the state of the paper. Once the final version of
            the paper has been accepted, author(s) are requested not to make
            further changes to the text.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Ethical Considerations
          </h2>
          <p>
            All manuscripts reporting experiments on human subjects should be
            accompanied with a statement in the methods section that all authors
            have complied with the requirements of the ethics committee of the
            institution in which the work was done. Information that may
            identify a patient will not be published in any form unless such
            information is essential, and the patient (or parent or guardian)
            has given written informed consent for such publication. If
            full-face photographs are to be used, such photographs must be
            accompanied with a signed or thumb printed informed consent of the
            subject. Animal experimentation must also follow institution’s
            guidelines and/or national laws in the use of laboratory animals in
            research.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Originality of Submissions
          </h2>
          <p>
            A condition of submission of manuscripts to IJMSD is that the work
            is the author’s own; all listed authors approve the submitted
            manuscript; the work must be original; and the manuscript is not
            under consideration for publication elsewhere. As a means of
            ensuring originality, all manuscripts received are subjected to
            plagiarism and similarity checks. If the similarity level with
            previously published works is more than 20% without the references,
            it shall be rejected even where it passes the reviewers’ assessment.
          </p>

          <h2 className=" font-semibold">Indexing</h2>
          <p>Coming soon</p>

          <h2 className="text-2xl font-semibold mb-2">Publisher's Details</h2>
          <p>
            Office Address: <br />
            Office No 3, Left Wing, Third floor,
            <br />
            Faculty of Social Sciences and Humanities Building,
            <br />
            Ritman University,
            <br />
            P.O. Box 1321, Ikot Ekpene, Akwa Ibom State, Nigeria.
            <br />
            Email: ijmsdjournal@gmail.com, edikan.ukpong@ritman.edu.ng
            <br />
            Phone number: +2347061585726
          </p>

          <h2 className="font-semibold">Journal Identifiers</h2>
          <p>
            eISSN: Coming soon
            <br />
            pISSN: Coming soon
          </p>

      
        </div>
      </div>
      <AsideSection />
    </div>
  );
}
