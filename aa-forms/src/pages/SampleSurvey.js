import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sample from "../_assets/sample.json";

const SampleSurvey = () => {
  return (
    <div>
      <h3>Sample Survey Questionaire</h3>
      <Link to="/">Home </Link>
    </div>
  );
};

export default SampleSurvey;
