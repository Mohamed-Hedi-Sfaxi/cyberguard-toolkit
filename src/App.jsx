import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PasswordChecker from "./tools/PasswordChecker";
import ChecklistGenerator from "./tools/ChecklistGenerator";
import PhishingQuiz from "./tools/PhishingQuiz";
import ProToolkit from "./pages/ProToolkit";

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
