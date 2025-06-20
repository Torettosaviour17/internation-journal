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

function App() {
  return (
    <>
      <Navbar />,
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submissions" element={<Submission />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/about-journal" element={<AboutJournal />} />
        <Route path="/editorial-team" element={<EditorialTeam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/current-issues" element={<CurrentIssues />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
