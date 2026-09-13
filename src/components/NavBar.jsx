import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <Shield size={24} />
          <span>CyberGuard</span>
        </Link>

        <nav className="navbar-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
