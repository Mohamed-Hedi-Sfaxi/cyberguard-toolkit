import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import PasswordChecker from "./tools/PasswordChecker.jsx";
import ChecklistGenerator from "./tools/ChecklistGenerator.jsx";
import PhishingQuiz from "./tools/PhishingQuiz.jsx";
import ProToolkit from "./pages/ProToolkit.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/tools/password-checker"
              element={<PasswordChecker />}
            />

            <Route
              path="/tools/checklist-generator"
              element={<ChecklistGenerator />}
            />

            <Route path="/tools/phishing-quiz" element={<PhishingQuiz />} />
            <Route path="/pro-toolkit" element={<ProToolkit />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
