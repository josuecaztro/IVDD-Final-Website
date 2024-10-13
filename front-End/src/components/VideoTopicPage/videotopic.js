import React, { useState } from 'react';
import './videotopic.css';
import Dropdown from '../HomePage/DropDownButton';
import { useLocation } from 'react-router-dom';
import topicText from './videotopicTEXT';
import siteText from '../HomePage/HomePageTEXT';
import videoData from './videoDATA';
import Dropdown2 from './videoTopicButton';


function ShowAllVideoTopics( { language } ){

/*
    TOPIC
    Learn about TOPIC throughout our previous preachings! 
    Total Videos: N
    
    same drop down menu saying choose OTHER topics

    youtube current video title 
    youtube iframe with video 1
    buttons that say previous video , next video

    preachings on TOPIC (in order!) label
    some cool visual that shows what page or video you're on with all videos like filled in circles or something

*/

const location = useLocation();

// Get the topic from the route state, or fall back to the default topic
const initialTopic = location.state?.selectedTopic || 'Discipleship';
const [topic, setTopic] = useState(initialTopic);const [videoIndex, setVideoIndex] = useState(0);

const videos = videoData[language][topic];
const totalVideos = videos.length;

// Handler for navigating between videos
const handleNext = () => {
  if (videoIndex < totalVideos - 1) {
    setVideoIndex(videoIndex + 1);
  }
};

const handlePrevious = () => {
  if (videoIndex > 0) {
    setVideoIndex(videoIndex - 1);
  }
};


//this function is here for DYNAMIC TRANSLATION
const getTranslatedText = (key, replacements) => {
  let text = topicText[language][key];

  // Replace placeholders in the text
  for (const [placeholder, value] of Object.entries(replacements)) {
    text = text.replace(`{${placeholder}}`, value);
  }

  return text;
};

const translatedTopic = siteText[language].topics[topic] || topic; // Fallback to the original topic if not found
console.log(translatedTopic);

    return (
        <div id="full-topic-page">

         {/* Display the selected topic */}
         <div id="top-topic-div">
         <p>{getTranslatedText("topicIntro", {translatedTopic})}</p>
        <h1 id="t-id-h1">{translatedTopic}</h1>
        <p>{topicText[language].totalVideos.replace("{total}", totalVideos)}</p>
        </div>


        <div id="middle-topic-container">
        <div id="left-topic-div">
        {/* Current video section */}
        <div className="video-section">
        <Dropdown2 setTopic={setTopic} language={language}/>
        <br/>
        <br/>
    

          <iframe
            id="current-video-on-topic-playlist"
            width="560"
            height="315"
            src={videos[videoIndex].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videos[videoIndex].title}
          ></iframe>
          <p id="upload-text-for-vid">{topicText[language].originallyUploaded.replace("{date}", videos[videoIndex].date)}</p>
        </div>
            </div>
            <div id="right-topic-div">
                           {/* Dropdown for choosing a different topic */}
                           <h2 id="sub-title-for-curr-id">{videos[videoIndex].title}</h2>
                           <h5>{topicText[language].description.replace("{description}", videos[videoIndex].desc)}</h5>

             {/* Preachings label */}



 {/* Navigation buttons */}
 <button className="player-buttons-for-topic" onClick={handlePrevious} disabled={videoIndex === 0}>
          {topicText[language].previousVideo}
        </button>
        <button className="player-buttons-for-topic"  onClick={handleNext} disabled={videoIndex === totalVideos - 1}>
          {topicText[language].nextVideo}
        </button>


             
    
        {/* Visual indicator for current video */}
      <div className="progress-indicator">
          {videos.map((video, index) => (
          <span
          key={index}
          className={`circle ${index === videoIndex ? 'filled' : ''}`} // Only fill the current video
      ></span>
      ))}
      </div>


            </div>
            </div>
            
            <div id="bottom-topic-div">


              

       
  
 

    </div>
    </div>

    )
}

export default ShowAllVideoTopics;