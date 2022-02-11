import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Hello and welcome. Please choose a questionaire.</h3>
      <Link to="/sample-survey">Sample Survey</Link> <br />
      <Link to="/sensory-survey">Sensory Preferences Survey</Link>
    </div>
  );
};

export default Home;
