import "./App.css";
import FileDashboard from "./FileDashboard";
import NavBar from "./NavBar";
import Upload from "./Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateHash from "./generateHash/GenerateHash.js";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/generateHash" element={<GenerateHash />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Upload />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<FileDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
