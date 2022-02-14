import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sample from "../_assets/sample.json";

const SampleSurvey = () => {
  const [reasonOption, setReasonOption] = useState();
  const [planningUseOption, setPlanningUseOption] = useState();
  const [whyInput, setWhyInput] = useState();
  const [firstName, setFirstName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [additionalFeedback, setAdditonalFeedback] = useState();

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
            placeholder="Type your reason here"
            value={whyInput}
            onChange={(e) => setWhyInput(e.target.value)}
          />
        </li>
      </ul>
    );
  };

  const buildContactInfo = () => {
    const questions = sample.questions;
    return (
      <ul>
        <li>
          <p>{questions[4].stem}</p>
          <textarea
            placeholder="Type your first name here"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </li>
        <li>
          <p>{questions[5].stem}</p>
          <textarea
            placeholder="Type your email address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </li>
        <li>
          <p>{questions[6].stem}</p>
          <textarea
            placeholder="Type your first name here"
            value={additionalFeedback}
            onChange={(e) => setAdditonalFeedback(e.target.value)}
          />
        </li>
      </ul>
    );
  };

  return (
    <div>
      <Link to="/">Home </Link>
      <h2>
        {sample.name} {sample.description}
      </h2>
      <p>{sample.instructions}</p>
      {buildQuestions()}
      <p>{sample.questions[3].instructions}</p>
      {buildContactInfo()}
    </div>
  );
};

export default SampleSurvey;
