import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SummaryReport = ({ score }) => {
  return (
    <div>
      <h3>Survey Summary Report</h3>
      <p>You scored {score} points.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default SummaryReport;
