function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>CyberGuard</strong>
          <p>
            Practical cybersecurity tools and resources for everyone.
          </p>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} CyberGuard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;