import "./App.css";
import View from "./View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./Pages/Members/Members.jsx";
import Reports from "./Pages/Reports/Reports.jsx";
import Analysis from "./Pages/Analysis/Analysis.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<View />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/analysis" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
