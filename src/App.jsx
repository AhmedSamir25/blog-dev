import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./page/landing/landing_page";
import TestPage  from "./page/test_page";
function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/write" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
