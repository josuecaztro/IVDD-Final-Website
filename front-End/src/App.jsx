import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GenerateNav from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayDonatePage from './Donate';
import DisplayHomePage from './HomePage';

function App() {
  return (
    
    <Router>
    <GenerateNav/>
    <Routes>
      <Route path="/" element={<DisplayHomePage/>}/>
      <Route path="/donate" element={<DisplayDonatePage/>}/>
    </Routes>
    </Router>

);
}

export default App;