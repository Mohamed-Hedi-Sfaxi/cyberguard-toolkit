import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, FileCheck } from "lucide-react";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            Security made simple
          </div>

          <h1>
            Protect your digital life
            <span> without the complexity.</span>
          </h1>

          <p>
            Free cybersecurity tools, practical guides, and resources designed
            for people who aren't security experts.
          </p>

          <div className="hero-actions">
            <Link to="/tools" className="button button-primary">
              Explore free tools
              <ArrowRight size={18} />
            </Link>

            <Link to="/resources" className="button button-secondary">
              View resources
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <p className="eyebrow">CYBERGUARD TOOLS</p>
          <h2>Simple tools for everyday security</h2>
          <p>
            No security degree required. Just practical tools that help you make
            better security decisions.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <Lock size={28} />
            <h3>Password Checker</h3>
            <p>Evaluate password strength directly in your browser.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />
            <h3>Security Checklist</h3>
            <p>
              Generate a personalized security checklist for your situation.
            </p>
          </div>

          <div className="feature-card">
            <FileCheck size={28} />
            <h3>Phishing Quiz</h3>
            <p>Test your ability to recognize common phishing attempts.</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="eyebrow">FREE SECURITY RESOURCE</p>

          <h2>Start securing your business today.</h2>

          <p>
            Download the free CyberGuard Starter Kit and use it as your starting
            point.
          </p>
        </div>

        <Link to="/resources" className="button button-primary">
          Get the free kit
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default Home;
