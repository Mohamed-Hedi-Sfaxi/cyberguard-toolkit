import { CheckCircle2, Download, ShieldCheck } from "lucide-react";

function ProToolkit() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-icon">
          <ShieldCheck size={34} />
        </div>

        <p className="eyebrow">CYBERGUARD PRO</p>

        <h1>Small Business Security Pro Toolkit</h1>

        <p className="product-subtitle">
          A practical cybersecurity operating toolkit for small businesses,
          freelancers, and non-technical teams.
        </p>

        <div className="product-price">$9</div>

        <button
          className="button button-primary product-button"
          onClick={() => alert("Checkout will be available soon.")}
        >
          Get the Pro Toolkit
        </button>

        <a
          href="/downloads/CyberGuard_Small_Business_Security_Pro_Toolkit.pdf"
          download
          className="product-preview-link"
        >
          <Download size={16} />
          Preview the PDF
        </a>
      </section>

      <section className="product-content">
        <div>
          <p className="eyebrow">WHAT'S INCLUDED</p>
          <h2>Everything you need to build a security baseline</h2>
          <p>
            The Pro Toolkit turns cybersecurity into a repeatable process
            instead of a collection of random tips.
          </p>
        </div>

        <div className="product-features">
          {[
            "Critical account inventory",
            "Password & authentication policy",
            "Device security baseline",
            "Backup & recovery planning",
            "Phishing defense checklist",
            "Access-control process",
            "Incident-response mini-plan",
            "Incident worksheet",
            "Third-party security review",
            "Employee security policy starter",
            "Security scorecard",
            "Risk register",
            "Monthly security review",
            "90-day improvement roadmap",
          ].map((feature) => (
            <div className="product-feature" key={feature}>
              <CheckCircle2 size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProToolkit;
