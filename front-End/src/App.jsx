import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateNav from './components/NavBar/navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayDonatePage from './components/DonatePage/Donate';
import DisplayHomePage from './components/HomePage/HomePage';
import DisplayPrayerReqPage from './components/PrayerReqPage/PrayerReqPage';
import DeployContactUs from './components/ContactUsPage/ContactUsPage';
import DisplayMission from './components/MissionPage/Mission';
import DisplayAboutUs from './components/WhoWeArePage/AboutUs';
import ShowAllVideoTopics from './components/VideoTopicPage/videotopic';
import DisplayAdminDashboard from './components/Admin/Dashboard/adminDashboard';
import DisplayDepartmentsPage from './components/Departments/Departments';

function App() {

  const [language, setLanguage] = useState('es');

  return (
    
    <Router>
    <GenerateNav language={language} setLanguage={setLanguage}/>
    {/* EVERY ROUTH PATH MUST HAVE THAT
        LANGUAGE ATTRIBUTE FOR PROPER
        TRANSLATION THROUGHOUT THE APP */}
    <Routes>
      <Route path="/" element={<DisplayHomePage language={language}/>}/>
      <Route path="/about" element={<DisplayAboutUs language={language}/>}/>
      <Route path="/mission" element={<DisplayMission language={language}/>}/>
      <Route path="/departments"element={<DisplayDepartmentsPage language={language}/>}/>
      <Route path="/livetopics" element={<ShowAllVideoTopics language={language}/>}/>
      <Route path="/donate" element={<DisplayDonatePage language={language}/>}/>
      <Route path="/contact" element={<DeployContactUs language={language}/>}/>
      <Route path="/prayerReq" element={<DisplayPrayerReqPage language={language}/>}/>
      <Route path="/admin" element={<DisplayAdminDashboard/>}/>
    </Routes>
    </Router>

);
}

export default App;