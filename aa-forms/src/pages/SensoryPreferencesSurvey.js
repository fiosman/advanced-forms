import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spi from "../_assets/spi.json";

const SensoryPreferencesSurvey = () => {
  const questions = spi.questions.slice(1);

  const buildQuestions = () => {
    return (
      <ul>
        {questions.map((question, idx) => {
          return (
            <li key={idx}>
              <p>{question.stem}</p>
              <label>
                <input type="radio" value="strongly-agree" name="strongly-agree" />
                Strongly Agree
              </label>
              <label>
                <input type="radio" value="agree" name="agree" />
                Agree
              </label>
              <label>
                <input type="radio" value="neutral" name="neutral" />
                Netural
              </label>
              <label>
                <input type="radio" value="disagree" name="disagree" />
                Disagree
              </label>
              <label>
                <input type="radio" value="strongly-disagree" name="strongly-disagree" />
                Strongly Disagree
              </label>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div>
      <div>
        <Link to="/">Home </Link>
        <h3>Sensory Preferences Survey</h3>
        <p>{spi.questions[0].instructions}</p>
        {buildQuestions()}
      </div>
    </div>
  );
};

export default SensoryPreferencesSurvey;
