import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sample from "../_assets/sample.json";

const SampleSurvey = () => {
  const [reasonOption, setReasonOption] = useState();

  const Questions = () => {
    const questions = sample.questions;
    return (
      <ul>
        <li>
          <p>{questions[0].stem}</p>
          {questions[0].options.map((option) => {
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
      </ul>
    );
  };
  return (
    <div>
      <h2>
        {sample.name} {sample.description}
      </h2>
      <p>{sample.instructions}</p>
      <Questions />
      <Link to="/">Home </Link>

      <form>
        <h3></h3>
      </form>
    </div>
  );
};

export default SampleSurvey;
