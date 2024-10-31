import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ajoute d'autres routes ici, par exemple : */}
        {/* <Route path="/activites" element={<Activites />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
