import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spi from "../_assets/spi.json";
import SummaryReport from "./SummaryReport";

const SensoryPreferencesSurvey = () => {
  const questions = spi.questions.slice(1);
  const [response, setResponse] = useState({
    0: { res: "" },
    1: { res: "" },
    2: { res: "" },
    3: { res: "" },
    4: { res: "" },
    5: { res: "" },
    6: { res: "" },
    7: { res: "" },
    8: { res: "" },
    9: { res: "" },
    10: { res: "" },
    11: { res: "" },
    12: { res: "" },
    13: { res: "" },
    14: { res: "" },
  });
  const [score, setScore] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const buildQuestions = () => {
    return (
      <ul>
        {questions.map((question, idx) => {
          return (
            <li key={idx}>
              <p>{question.stem}</p>
              <input
                type="radio"
                value="strongly-agree"
                onChange={() => setResponse({ ...response, [idx]: { res: "strongly-agree" } })}
                checked={response[idx].res === "strongly-agree"}
                disabled={formSubmitted}
              />
              <label>Strongly Agree</label>
              <input
                type="radio"
                value="agree"
                onChange={() => setResponse({ ...response, [idx]: { res: "agree" } })}
                checked={response[idx].res === "agree"}
                disabled={formSubmitted}
              />
              <label>Agree</label>

              <input
                type="radio"
                value="neutral"
                onChange={() => setResponse({ ...response, [idx]: { res: "neutral" } })}
                checked={response[idx].res === "neutral"}
                disabled={formSubmitted}
              />
              <label>Netural</label>
              <input
                type="radio"
                value="disagree"
                onChange={() => setResponse({ ...response, [idx]: { res: "disagree" } })}
                checked={response[idx].res === "disagree"}
                disabled={formSubmitted}
              />
              <label>Disagree</label>
              <input
                type="radio"
                value="strongly-disagree"
                onChange={() => setResponse({ ...response, [idx]: { res: "strongly-disagree" } })}
                checked={response[idx].res === "strongly-disagree"}
                disabled={formSubmitted}
              />
              <label>Strongly Disagree</label>
            </li>
          );
        })}
      </ul>
    );
  };

  const tallyScores = () => {
    let totalScore = 0;
    for (let question in response) {
      const questionResponse = response[question].res;
      switch (questionResponse) {
        case "strongly-agree":
          totalScore += 5;
          break;
        case "agree":
          totalScore += 4;
          break;
        case "neutral":
          totalScore += 3;
          break;
        case "disagree":
          totalScore += 2;
          break;
        case "strongly-disagree":
          totalScore += 1;
          break;
        default:
          break;
      }
    }
    return totalScore;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setScore(tallyScores());
    setFormSubmitted(true);
  };

  return (
    <div>
      <div>
        <Link to="/">Home </Link>
        <form onSubmit={handleFormSubmit}>
          <h3>Sensory Preferences Survey</h3>
          <p>{spi.questions[0].instructions}</p>
          {buildQuestions()}
          <input type="submit" value="Submit" disabled={formSubmitted} />
        </form>
        {formSubmitted && <SummaryReport score={score} />}
      </div>
    </div>
  );
};

export default SensoryPreferencesSurvey;
