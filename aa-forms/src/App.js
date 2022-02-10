import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SampleSurvey from "./pages/SampleSurvey";
import SensoryPreferencesSurvey from "./pages/SensoryPreferencesSurvey";
import SummaryReport from "./pages/SummaryReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample-survey" element={<SampleSurvey />} />
        <Route path="/sensory-survey" element={<SensoryPreferencesSurvey />} />
        <Route path="/summary-report" element={<SummaryReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
