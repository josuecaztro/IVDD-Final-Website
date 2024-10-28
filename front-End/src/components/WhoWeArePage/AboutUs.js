import React from 'react';
import './AboutUs.css';
import aboutText from './AboutUsTEXT';


function DisplayAboutUs ( { language } ){



    return (
        <div id="full-wwa-page">

            <h1>Who We Are</h1>
            <h2>Iglesia Voz de Dios</h2>
            <p>{aboutText[language].robertoBio}</p>
            

            <div id="profile-card-grid">
                <div id="roberto">Roberto</div>
                <div id="her-name">Her Name</div>
                <div id="his-name">His Name</div>
                <div id="his-bio">His Bio</div>
                <div id="her-bio">Her Bio</div>
                <div id="mirna">Mirna</div>
            </div>

        </div>
    )
}

export default DisplayAboutUs;