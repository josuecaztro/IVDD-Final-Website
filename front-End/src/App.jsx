import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateNav from './components/NavBar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayDonatePage from './components/DonatePage/Donate';
import DisplayHomePage from './components/HomePage/HomePage';
import DisplayPrayerReqPage from './components/PrayerReqPage/PrayerReqPage';
import DeployContactUs from './components/ContactUsPage/ContactUsPage';

function App() {
  return (
    
    <Router>
    <GenerateNav/>
    <Routes>
      <Route path="/" element={<DisplayHomePage/>}/>
      <Route path="/donate" element={<DisplayDonatePage/>}/>
      <Route path="/contact" element={<DeployContactUs/>}/>
      <Route path="/prayerReq" element={<DisplayPrayerReqPage/>}/>
    </Routes>
    </Router>

);
}

export default App;