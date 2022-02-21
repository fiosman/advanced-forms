import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spi from "../_assets/spi.json";

const SensoryPreferencesSurvey = () => {
  const questions = spi.questions.slice(1);

  const buildQuestions = () => {
    return (
      <ul>
        {questions.map((question) => {
          return (
            <li>
              <p>{question.stem}</p>
              <label>
                <input type="radio"></input>
                Strongly Agree
              </label>
              <label>
                <input type="radio"></input>
                Agree
              </label>
              <label>
                <input type="radio"></input>
                Netural
              </label>
              <label>
                <input type="radio"></input>
                Disagree
              </label>
              <label>
                <input type="radio"></input>
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
