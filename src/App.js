import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
