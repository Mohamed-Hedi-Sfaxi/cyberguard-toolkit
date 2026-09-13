import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>CyberGuard</strong>

            <p>Practical cybersecurity tools and resources for everyone.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} CyberGuard. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
