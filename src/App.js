import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CardDetail from './pages/CardDetail';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/card/:id" element={<CardDetail />} />
    <Route path= "*" element={<NotFound />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;

