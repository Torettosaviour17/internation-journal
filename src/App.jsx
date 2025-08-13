import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Submission from "./pages/Submission";
import Home from "./pages/Home";
import AboutJournal from "./pages/AboutJournal";
import EditorialTeam from "./pages/EditorialTeam";
import ContactUs from "./pages/ContactUs";
import CurrentIssues from "./pages/CurrentIssues";
import Archives from "./pages/Archives";
import Announcements from "./pages/Announcements";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import MakeSubmission from "./pages/MakeSubmission";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CallForPapers from "./pages/CallForPapers";
import ScrollToTop from "./pages/scrollToTop";

function App() {
  return (
    <div className="relative min-h-screen dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage: `url('/journal-logo.jpg')`,
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <ScrollToTop /> {/* Added here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submissions" element={<Submission />} />
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center text-3xl font-bold text-green-500">
                Page Not Found
              </div>
            }
          />
          <Route path="/about-journal" element={<AboutJournal />} />
          <Route path="/editorial-team" element={<EditorialTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/current-issues" element={<CurrentIssues />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submission" element={<MakeSubmission />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
