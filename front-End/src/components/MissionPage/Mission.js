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
            {missionText[language].pg1}
            <br/>
            <br/>
            {missionText[language].pg2}
            <br/>
            <br/>
            {missionText[language].pg3}
            <br/>
            <br/>
            {missionText[language].pg4}
            <br/>
            <br/>
            {missionText[language].pg5}
            <br/>
            <br/>
            {missionText[language].pg6}
            <br/>
            <br/>
            {missionText[language].pg7}
            <br/>
            <br/>
            {missionText[language].pg8}
            <br/>
            <br/>
            {missionText[language].pg9}
            <br/>
            <br/>
            {missionText[language].pg10}
            <br/>
            <br/>
            {missionText[language].pg11}
          </p>
        </div>
      </div>
    )
}

export default DisplayMission;