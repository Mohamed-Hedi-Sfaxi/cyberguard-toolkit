import { Mail, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <p className="eyebrow">CONTACT</p>

        <h1>Get in touch.</h1>

        <p>
          Have a question, found a problem, or have an idea for a CyberGuard
          tool? We'd like to hear from you.
        </p>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <Mail size={28} />

          <h2>Email</h2>

          <p>
            For general questions, feedback, and business inquiries.
          </p>

          <a
            href="mailto:cyberguardtoolkit@gmail.com"
            className="contact-link"
          >
            cyberguardtoolkit@gmail.com
          </a>
        </article>

        <article className="contact-card">
          <MessageSquare size={28} />

          <h2>Feedback</h2>

          <p>
            Tell us about a problem you'd like CyberGuard to help solve.
          </p>

          <span className="contact-muted">
            Feedback form coming soon
          </span>
        </article>
      </section>

      <div className="contact-note">
        <strong>Note:</strong> CyberGuard does not currently provide emergency
        incident-response services. If you believe a system has been
        compromised, contact an appropriate cybersecurity professional or
        relevant service provider.
      </div>
    </div>
  );
}

export default Contact;