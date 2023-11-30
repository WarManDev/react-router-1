import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./components/rate/HomePage";
import DriftPage from "./components/rate/DriftPage";
import TimeAttackPage from "./components/rate/TimeAttackPage";
import ForzaPage from "./components/rate/ForzaPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
