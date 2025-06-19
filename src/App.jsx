import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Submission from "./pages/Submission";
import Home from "./pages/Home"; // <-- corrected import

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submissions" element={<Submission />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
