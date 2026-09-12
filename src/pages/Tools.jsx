import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lock, ShieldAlert } from "lucide-react";

function Tools() {
  return (
    <div className="tools-page">
      <section className="page-hero">
        <p className="eyebrow">CYBERGUARD TOOLS</p>

        <h1>Free cybersecurity tools</h1>

        <p>
          Practical tools designed to make everyday security easier. No security
          degree required.
        </p>
      </section>

      <section className="tools-grid">
        <Link to="/tools/password-checker" className="tool-card">
          <Lock size={28} />

          <h2>Password Security Checker</h2>

          <p>Analyze password characteristics directly in your browser.</p>

          <span>
            Open tool <ArrowRight size={16} />
          </span>
        </Link>

        <Link to="/tools/checklist-generator" className="tool-card">
          <CheckCircle2 size={28} />

          <h2>Security Checklist Generator</h2>

          <p>Create a practical security checklist for your situation.</p>

          <span>
            Open tool <ArrowRight size={16} />
          </span>
        </Link>
        
        <Link to="/tools/phishing-quiz" className="tool-card">
          <ShieldAlert size={28} />

          <h2>Phishing Awareness Quiz</h2>

          <p>Test your ability to identify common phishing techniques.</p>

          <span>
            Take the quiz <ArrowRight size={16} />
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Tools;
