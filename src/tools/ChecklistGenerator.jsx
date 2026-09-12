import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

const CHECKLISTS = {
  individual: {
    title: "Personal Security Checklist",
    description: "Essential security practices for everyday users.",
    items: [
      "Use a unique password for every important account.",
      "Enable multi-factor authentication whenever possible.",
      "Keep your operating system and applications updated.",
      "Use a reputable password manager.",
      "Back up important files regularly.",
      "Review account recovery options.",
      "Remove applications and browser extensions you no longer use.",
      "Check your important accounts for suspicious login activity.",
      "Avoid entering sensitive information on untrusted websites.",
      "Learn how to recognize common phishing attempts.",
    ],
  },

  freelancer: {
    title: "Freelancer Security Checklist",
    description: "Protect your accounts, devices, clients, and work.",
    items: [
      "Use unique passwords for every work-related account.",
      "Enable multi-factor authentication.",
      "Use a password manager.",
      "Encrypt sensitive files and devices.",
      "Keep your operating system and software updated.",
      "Maintain regular backups of client and project files.",
      "Separate personal and professional accounts where practical.",
      "Use secure Wi-Fi when working with sensitive information.",
      "Review permissions for cloud storage and collaboration tools.",
      "Create a basic incident-response plan.",
    ],
  },

  business: {
    title: "Small Business Security Checklist",
    description: "A practical baseline for improving business security.",
    items: [
      "Require strong, unique passwords for business accounts.",
      "Enable multi-factor authentication.",
      "Maintain an inventory of company devices and accounts.",
      "Keep software and operating systems patched.",
      "Implement regular backups.",
      "Limit administrative privileges.",
      "Create an employee security policy.",
      "Provide basic phishing-awareness training.",
      "Review third-party applications and integrations.",
      "Create an incident-response procedure.",
      "Protect customer and employee data.",
      "Review security practices regularly.",
    ],
  },
};

function ChecklistGenerator() {
  const [audience, setAudience] = useState("individual");
  const [checkedItems, setCheckedItems] = useState([]);

  const checklist = useMemo(() => CHECKLISTS[audience], [audience]);

  const completedCount = checkedItems.length;
  const totalCount = checklist.items.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  function toggleItem(index) {
    setCheckedItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  function changeAudience(value) {
    setAudience(value);
    setCheckedItems([]);
  }

  function resetChecklist() {
    setCheckedItems([]);
  }

  return (
    <div className="tool-container">
      <div className="tool-header">
        <CheckCircle2 size={32} />

        <div>
          <h1>Security Checklist Generator</h1>
          <p>
            Build a practical security checklist based on your situation.
          </p>
        </div>
      </div>

      <div className="checklist-selector">
        <label htmlFor="audience">I want to protect:</label>

        <select
          id="audience"
          value={audience}
          onChange={(event) => changeAudience(event.target.value)}
        >
          <option value="individual">My personal digital life</option>
          <option value="freelancer">My freelance work</option>
          <option value="business">My small business</option>
        </select>
      </div>

      <div className="checklist-card">
        <div className="checklist-top">
          <div>
            <h2>{checklist.title}</h2>
            <p>{checklist.description}</p>
          </div>

          <button
            type="button"
            onClick={resetChecklist}
            className="reset-button"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>

        <div className="progress-container">
          <div className="progress-info">
            <span>Progress</span>
            <strong>
              {completedCount}/{totalCount}
            </strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="checklist-items">
          {checklist.items.map((item, index) => {
            const completed = checkedItems.includes(index);

            return (
              <button
                type="button"
                key={item}
                className={`checklist-item ${
                  completed ? "completed" : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="checkbox">
                  {completed ? "✓" : ""}
                </span>

                <span>{item}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="privacy-note">
        <strong>Tip:</strong> You can use this checklist as a starting point.
        Security needs vary depending on your devices, accounts, data, and
        environment.
      </div>
    </div>
  );
}

export default ChecklistGenerator;