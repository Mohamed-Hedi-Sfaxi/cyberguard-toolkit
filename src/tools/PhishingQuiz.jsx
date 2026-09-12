import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

const QUESTIONS = [
  {
    question:
      "You receive an email saying your bank account will be closed today unless you verify your information through a link. What should you do?",
    options: [
      "Click the link and verify immediately.",
      "Reply to the email asking if it is legitimate.",
      "Open your bank's official website or app separately and check there.",
      "Forward the email to friends to ask what they think.",
    ],
    answer: 2,
    explanation:
      "Urgent requests combined with links are common phishing tactics. Access the service through an official website or app instead of using the link in the message.",
  },
  {
    question:
      "Which is the strongest warning sign that a message may be phishing?",
    options: [
      "It contains your name.",
      "It creates urgency and asks you to take an unexpected action.",
      "It uses your company's logo.",
      "It was sent during working hours.",
    ],
    answer: 1,
    explanation:
      "Phishing messages often create urgency or fear to make you act before you think carefully.",
  },
  {
    question:
      "A coworker sends you a message asking for a password because they are 'locked out.' What is the safest response?",
    options: [
      "Send the password because you know the coworker.",
      "Send only part of the password.",
      "Verify the request through a separate trusted communication channel.",
      "Ask them to send the request again.",
    ],
    answer: 2,
    explanation:
      "Sensitive requests should be independently verified, especially when credentials are involved.",
  },
  {
    question:
      "You receive an unexpected attachment from someone you know. What is the safest first step?",
    options: [
      "Open it immediately because the sender is trusted.",
      "Ask the sender through another channel whether they really sent it.",
      "Download it and scan it after opening.",
      "Forward it to another person.",
    ],
    answer: 1,
    explanation:
      "Compromised accounts can send malicious attachments. Verify unexpected files before opening them.",
  },
  {
    question:
      "Which URL is the most suspicious?",
    options: [
      "https://www.microsoft.com",
      "https://support.google.com",
      "https://microsoft.account-security-example.com",
      "https://www.apple.com",
    ],
    answer: 2,
    explanation:
      "Attackers can place a trusted brand name inside a longer domain. In this example, the actual domain is 'account-security-example.com', not Microsoft.",
  },
];

function PhishingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const answered = selectedAnswer !== null;

  function selectAnswer(index) {
    if (answered) return;

    setSelectedAnswer(index);

    if (index === question.answer) {
      setScore((current) => current + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / QUESTIONS.length) * 100);

    let message = "Keep practicing.";
    if (percentage >= 80) {
      message = "Great job! You have a strong phishing-awareness foundation.";
    } else if (percentage >= 60) {
      message = "Good start. A little more practice will sharpen your instincts.";
    }

    return (
      <div className="tool-container">
        <div className="quiz-result">
          <ShieldAlert size={42} />

          <p className="eyebrow">QUIZ COMPLETE</p>

          <h1>
            {score}/{QUESTIONS.length}
          </h1>

          <h2>{percentage}%</h2>

          <p>{message}</p>

          <button
            type="button"
            className="button button-primary quiz-restart"
            onClick={restartQuiz}
          >
            <RotateCcw size={17} />
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="tool-container">
      <div className="tool-header">
        <ShieldAlert size={32} />

        <div>
          <p className="eyebrow">PHISHING AWARENESS</p>
          <h1>Can you spot the phish?</h1>
          <p>
            Test your ability to recognize common phishing tactics.
          </p>
        </div>
      </div>

      <div className="quiz-progress">
        Question {currentQuestion + 1} of {QUESTIONS.length}
      </div>

      <div className="quiz-card">
        <h2>{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            const isCorrect = index === question.answer;
            const isSelected = index === selectedAnswer;

            let className = "quiz-option";

            if (answered && isCorrect) {
              className += " correct";
            } else if (answered && isSelected) {
              className += " incorrect";
            }

            return (
              <button
                type="button"
                key={option}
                className={className}
                onClick={() => selectAnswer(index)}
              >
                <span className="quiz-option-number">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>

                {answered && isCorrect && (
                  <CheckCircle2 size={20} />
                )}

                {answered && isSelected && !isCorrect && (
                  <XCircle size={20} />
                )}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="quiz-explanation">
            <strong>
              {selectedAnswer === question.answer
                ? "Correct."
                : "Not quite."}
            </strong>

            <p>{question.explanation}</p>
          </div>
        )}

        {answered && (
          <button
            type="button"
            className="button button-primary quiz-next"
            onClick={nextQuestion}
          >
            {currentQuestion === QUESTIONS.length - 1
              ? "See results"
              : "Next question"}
          </button>
        )}
      </div>
    </div>
  );
}

export default PhishingQuiz;