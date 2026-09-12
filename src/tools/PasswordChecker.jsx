import { useMemo, useState } from "react";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analysis = useMemo(() => {
    if (!password) {
      return {
        score: 0,
        label: "Enter a password",
        suggestions: [],
      };
    }

    let score = 0;
    const suggestions = [];

    if (password.length >= 8) score += 1;
    else suggestions.push("Use at least 8 characters.");

    if (password.length >= 12) score += 1;

    if (/[a-z]/.test(password)) score += 1;
    else suggestions.push("Add lowercase letters.");

    if (/[A-Z]/.test(password)) score += 1;
    else suggestions.push("Add uppercase letters.");

    if (/[0-9]/.test(password)) score += 1;
    else suggestions.push("Add numbers.");

    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else suggestions.push("Add special characters.");

    if (/(.)\1{2,}/.test(password)) {
      score -= 1;
      suggestions.push("Avoid repeated characters.");
    }

    let label = "Very weak";

    if (score >= 6) label = "Excellent";
    else if (score >= 5) label = "Strong";
    else if (score >= 3) label = "Fair";
    else if (score >= 1) label = "Weak";

    return {
      score: Math.max(0, Math.min(score, 6)),
      label,
      suggestions,
    };
  }, [password]);

  return (
    <div className="tool-container">
      <div className="tool-header">
        <ShieldCheck size={32} />
        <div>
          <h1>Password Security Checker</h1>
          <p>
            Check the strength of a password directly in your browser.
          </p>
        </div>
      </div>

      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter a password to check"
          className="password-input"
          autoComplete="off"
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="strength-section">
        <div className="strength-header">
          <span>Strength</span>
          <strong>{analysis.label}</strong>
        </div>

        <div className="strength-bars">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`strength-bar ${
                index < analysis.score ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {password && analysis.suggestions.length > 0 && (
        <div className="suggestions">
          <h3>How to improve it</h3>

          {analysis.suggestions.map((suggestion) => (
            <p key={suggestion}>• {suggestion}</p>
          ))}
        </div>
      )}

      <div className="privacy-note">
        <strong>Privacy:</strong> your password is analyzed locally in your
        browser and is not sent to our server.
      </div>
    </div>
  );
}

export default PasswordChecker;