import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spi from "../_assets/spi.json";

const SensoryPreferencesSurvey = () => {
  const questions = spi.questions.slice(1);

  // const buildQuestions = () => {};
  return (
    <div>
      <div>
        <Link to="/">Home </Link>
        <h3>Sensory Preferences Survey</h3>
        <p>{spi.questions[0].instructions}</p>
      </div>
    </div>
  );
};

export default SensoryPreferencesSurvey;
