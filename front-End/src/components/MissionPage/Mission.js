import React from 'react';
import './Mission.css'
import missionText from './MissionTEXT';
import churchStillImage from '../../images/churchofchristpic.jpg'

function DisplayMission ( { language }){

    return (
        <div className="mission-container">
        <header className="mission-header">{missionText[language].heading}</header>
        <img id="still-img-1" src={churchStillImage}/>
        <div id="mission-card">
          <p className="mission-text">
            {missionText[language].missionBody}
          </p>
        </div>
      </div>
    )
}

export default DisplayMission;