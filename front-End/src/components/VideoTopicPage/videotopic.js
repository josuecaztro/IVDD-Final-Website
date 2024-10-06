import React, { useState } from 'react';
import './videotopic.css';
import Dropdown from '../HomePage/DropDownButton';
import { useLocation } from 'react-router-dom';


function ShowAllVideoTopics(){

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

// Mock data for videos
const videoData = {
  'Discipleship': [
    { title: 'Discipleship Part 1', url: 'https://www.youtube.com/embed/videoID1' },
    { title: 'Discipleship Part 2', url: 'https://www.youtube.com/embed/videoID2' }
  ],
  'Marriage': [
    { title: 'Marriage Part 1', url: 'https://www.youtube.com/embed/videoID3' },
    { title: 'Marriage Part 2', url: 'https://www.youtube.com/embed/videoID4' },
    { title: 'Marriage Part 3', url: 'https://www.youtube.com/embed/videoID4' }
  ]
};

const videos = videoData[topic];
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

    return (
        <div id="full-topic-page">

         {/* Display the selected topic */}
         <div id="top-topic-div">
         <p>Explore our complete series of preachings on {topic}, organized in order to guide you through each message step by step.</p>
        <h1>{topic}</h1>
        <p>{topic} Playlist:  {totalVideos} Videos</p>
        </div>


        <div id="middle-topic-container">
        <div id="left-topic-div">
        {/* Current video section */}
        <div className="video-section">
          <iframe
            width="560"
            height="315"
            src={videos[videoIndex].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videos[videoIndex].title}
          ></iframe>
          <p>Originally uploaded June 8, 2018</p>
        </div>
            </div>
            <div id="right-topic-div">
                           {/* Dropdown for choosing a different topic */}
                           <h2>{videos[videoIndex].title}</h2>
                           <h4>Title: youtube title </h4>
                           <h5>Description: do not fall into temptation</h5>
           <Dropdown setTopic={setTopic} />
             {/* Preachings label */}

            </div>
            </div>
            
            <div id="bottom-topic-div">

        {/* Navigation buttons */}
        <button onClick={handlePrevious} disabled={videoIndex === 0}>
          Previous Video
        </button>
        <button onClick={handleNext} disabled={videoIndex === totalVideos - 1}>
          Next Video
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


       
  


  

    )
}

export default ShowAllVideoTopics;