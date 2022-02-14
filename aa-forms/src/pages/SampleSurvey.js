import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sample from "../_assets/sample.json";

const SampleSurvey = () => {
  const [reasonOption, setReasonOption] = useState();
  const [planningUseOption, setPlanningUseOption] = useState();
  const [whyInput, setWhyInput] = useState();

  const buildQuestions = () => {
    const questions = sample.questions;
    return (
      <ul>
        <li>
          <p>{questions[0].stem}</p>
          {questions[0].options.map((option, idx) => {
            return (
              <>
                <input
                  type="radio"
                  checked={reasonOption === option.value}
                  onChange={() => setReasonOption(option.value)}
                  value={option.value}
                  name={option.value}
                />
                <label>{option.text}</label>
              </>
            );
          })}
        </li>
        <li>
          <p>{questions[1].stem}</p>
          {questions[1].options.map((option, idx) => {
            return (
              <>
                <input
                  type="radio"
                  checked={planningUseOption === option.value}
                  onChange={() => setPlanningUseOption(option.value)}
                  value={option.value}
                  name={option.value}
                />
                <label>{option.text}</label>
              </>
            );
          })}
        </li>
        <li>
          <p>{questions[2].stem}</p>
          <textarea
            placeholder="Add your reason here"
            value={whyInput}
            onChange={(e) => setWhyInput(e.target.value)}
          />
        </li>
      </ul>
    );
  };

  return (
    <div>
      <h2>
        {sample.name} {sample.description}
      </h2>
      <p>{sample.instructions}</p>
      {buildQuestions()}
      <p>{sample.questions[3].instructions}</p>
      <Link to="/">Home </Link>
    </div>
  );
};

export default SampleSurvey;
