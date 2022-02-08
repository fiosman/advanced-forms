import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SampleSurvey from "./pages/SampleSurvey";
import SensoryPreferencesSurvey from "./pages/SensoryPreferencesSurvey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample-survey" element={<SampleSurvey />} />
        <Route path="/sensory-survey" element={<SensoryPreferencesSurvey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
