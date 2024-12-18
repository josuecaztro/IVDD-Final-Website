import React, { useState, useEffect } from 'react';
import './videotopic.css';
import { useLocation } from 'react-router-dom';
import topicText from './videotopicTEXT';
import siteText from '../HomePage/HomePageTEXT';
import videoData from './videoDATA';
import Dropdown2 from './videoTopicButton';


function ShowAllVideoTopics( { onClick, language } ){

  const createRipple = (event) => {
    console.log("Ripple effect triggered"); // Add this
    //I got this utility function online. It allows the cool ripple effect on button click.
    const button = event.currentTarget;
    console.log("the button shuld be: " + event.currentTarget)
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";
    button.appendChild(ripple);
    console.log(button.innerHTML); // Check if the span with class="ripple" is present

      setTimeout(() => {
      ripple.remove();
    }, 600);
  };
  
const location = useLocation();

// Get the topic from the route state, or fall back to the default topic
const initialTopic = location.state?.selectedTopic || 'Discipleship';
const [topic, setTopic] = useState(initialTopic);
const [videoIndex, setVideoIndex] = useState(0);

const videos = videoData[language][topic];
console.log("Videos: " + videos.length)
const totalVideos = videos.length;
/*
If you ever run into an error again adding a NEW topic,
you can uncomment these 3 lines of code right below this big
comment. It helps mitigate any errors from being
thrown and allowing videos.length to be safe to access so you
can see what's going on.
*/
// const videos = videoData[language]?.[topic] || [];
// console.log("Videos:", videos.length); 
// const totalVideos = videos.length; 


// navigate between videos function
const handleNext = (e) => {
  createRipple(e); // Triggers the ripple effect
  if (onClick) {
    onClick(e); 
  }
  // for video index logic
  if (videoIndex < totalVideos - 1) {
    setVideoIndex(videoIndex + 1);
  }
};

const handlePrevious = (e) => {
  createRipple(e);
  if (onClick){
    onClick(e);
  }
  if (videoIndex > 0) {
    setVideoIndex(videoIndex - 1);
  }
};



//this function is here for DYNAMIC TRANSLATION
const getTranslatedText = (key, replacements) => {
  let text = topicText[language][key];

  
  for (const [placeholder, value] of Object.entries(replacements)) {
    text = text.replace(`{${placeholder}}`, value);
  }

  return text;
};

const translatedTopic = siteText[language].topics[topic] || topic; // Fallback to the original topic if not found
console.log(translatedTopic);


useEffect(() => {
  setVideoIndex(0);
},[topic]);

    return (
        <div id="full-topic-page">

         {/* displays current selected topic */}
         <div id="top-topic-div">
         <p id="t-intro">{getTranslatedText("topicIntro", {translatedTopic})}</p>
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
            src={videos[videoIndex]?.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videos[videoIndex]?.title}
          ></iframe>
          <p id="upload-text-for-vid">{topicText[language].originallyUploaded.replace("{date}", videos[videoIndex]?.date)}</p>
        </div>
            </div>
            <div id="right-topic-div">
                           {/* Dropdown for choosing a different topic */}
                           <h2 id="sub-title-for-curr-id">{videos[videoIndex]?.title}</h2>
                           <h5><span id="description-header-h5">{topicText[language].description}</span> {videos[videoIndex]?.desc}</h5>
                           {/* <h5>{topicText[language].description.replace("{description}", videos[videoIndex]?.desc)}</h5> */}
             {/* Preachings label */}



 {/* Navigation buttons */}
 <button className="player-buttons-for-topic" onClick={handlePrevious} disabled={videoIndex === 0} id="top-prev-but">
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
            
    
    </div>

    )
}

export default ShowAllVideoTopics;