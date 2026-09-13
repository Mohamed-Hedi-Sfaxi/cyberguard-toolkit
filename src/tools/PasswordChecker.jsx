import { useMemo, useState } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import zxcvbn from "zxcvbn-ts";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analysis = useMemo(() => {
    if (!password) {
      return {
        score: 0,
        label: "Enter a password",
        message:
          "We'll estimate how resistant this password is to common guessing attacks.",
        suggestions: [],
        characteristics: [],
      };
    }

    const result = zxcvbn(password);

    const labels = [
      "Very weak",
      "Weak",
      "Fair",
      "Strong",
      "Very strong",
    ];

    const suggestions = [];
    const characteristics = [];

    if (password.length >= 15) {
      characteristics.push(`✓ ${password.length} characters`);
    } else {
      characteristics.push(
        `• ${password.length} characters — longer is generally better`
      );
      suggestions.push(
        "Use a longer password or passphrase. Aim for at least 15 characters when practical."
      );
    }

    if (result.feedback.warning) {
      suggestions.push(result.feedback.warning);
    }

    result.feedback.suggestions.forEach((suggestion) => {
      if (!suggestions.includes(suggestion)) {
        suggestions.push(suggestion);
      }
    });

    if (result.score >= 3) {
      characteristics.push("✓ No obvious weak pattern detected");
    } else {
      characteristics.push("• Some predictable patterns may be present");
    }

    if (password.length >= 15 && result.score >= 3) {
      characteristics.push(
        "✓ Length is helping significantly"
      );
    }

    if (suggestions.length === 0) {
      suggestions.push(
        "Use a unique password for this account and enable multi-factor authentication when available."
      );
    }

    return {
      score: result.score,
      label: labels[result.score],
      message:
        result.score >= 3
          ? "This password appears relatively resistant to common guessing patterns."
          : "This password may be easier to guess using common patterns or word-based attacks.",
      suggestions,
      characteristics,
    };
  }, [password]);

  return (
    <div className="tool-container">
      <div className="tool-header">
        <ShieldCheck size={32} />

        <div>
          <p className="eyebrow">PASSWORD SECURITY</p>

          <h1>Password Security Checker</h1>

          <p>
            Estimate password strength using local analysis in your browser.
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
          maxLength={256}
          aria-label="Password to analyze"
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          title={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {password && (
        <>
          <div className="strength-section">
            <div className="strength-header">
              <span>Estimated strength</span>
              <strong>{analysis.label}</strong>
            </div>

            <div
              className="strength-bars"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="4"
              aria-valuenow={analysis.score}
              aria-label={`Password strength: ${analysis.label}`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`strength-bar ${
                    index < analysis.score ? "active" : ""
                  }`}
                />
              ))}
            </div>

            <p className="strength-message">
              {analysis.message}
            </p>
          </div>

          <div className="password-analysis-card">
            <h3>What we found</h3>

            <div className="analysis-list">
              {analysis.characteristics.map((characteristic) => (
                <p key={characteristic}>{characteristic}</p>
              ))}
            </div>
          </div>

          <div className="suggestions">
            <h3>How to improve it</h3>

            {analysis.suggestions.map((suggestion) => (
              <p key={suggestion}>• {suggestion}</p>
            ))}
          </div>
        </>
      )}

      <div className="password-guidance">
        <h3>Length vs. complexity</h3>

        <p>
          A long, unique password or passphrase can be stronger than a much
          shorter password that simply adds a capital letter, number, and
          symbol.
        </p>

        <p>
          This checker does not require arbitrary character combinations.
          Instead, it looks for password length, common words, patterns,
          repetitions, sequences, and other characteristics.
        </p>
      </div>

      <div className="privacy-note">
        <strong>Privacy:</strong> the password is analyzed in your browser.
        CyberGuard does not intentionally send the password to its servers.
        Never enter a password that you currently use on an important account
        just to test it.
      </div>
    </div>
  );
}

export default PasswordChecker;