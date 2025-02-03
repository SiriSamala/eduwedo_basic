import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing/Landing.jsx';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
    
      </Routes>
    </Router>
  );
}

export default App