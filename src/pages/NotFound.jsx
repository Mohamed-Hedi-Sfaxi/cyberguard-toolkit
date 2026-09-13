import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">404</p>

      <h1>Page not found.</h1>

      <p>
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link to="/" className="button button-primary">
        <ArrowLeft size={17} />
        Back to CyberGuard
      </Link>
    </div>
  );
}

export default NotFound;