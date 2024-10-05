import React, { useState } from 'react';
import './videotopic.css';
import Dropdown from '../HomePage/DropDownButton';

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

const [topic, setTopic] = useState('Discipleship');  // Default topic
const [videoIndex, setVideoIndex] = useState(0);

// Mock data for videos
const videoData = {
  'Discipleship': [
    { title: 'Discipleship Part 1', url: 'https://www.youtube.com/embed/videoID1' },
    { title: 'Discipleship Part 2', url: 'https://www.youtube.com/embed/videoID2' }
  ],
  'Marriage': [
    { title: 'Marriage Part 1', url: 'https://www.youtube.com/embed/videoID3' },
    { title: 'Marriage Part 2', url: 'https://www.youtube.com/embed/videoID4' }
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
        <h1>{topic}</h1>
        <p>Learn about {topic} throughout our previous preachings!</p>
        <p>Total Videos: {totalVideos}</p>
        
        {/* Dropdown for choosing a different topic */}
        <Dropdown setTopic={setTopic} />
  
        {/* Current video section */}
        <div className="video-section">
          <h3>{videos[videoIndex].title}</h3>
          <iframe
            width="560"
            height="315"
            src={videos[videoIndex].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videos[videoIndex].title}
          ></iframe>
        </div>
  
        {/* Navigation buttons */}
        <button onClick={handlePrevious} disabled={videoIndex === 0}>
          Previous Video
        </button>
        <button onClick={handleNext} disabled={videoIndex === totalVideos - 1}>
          Next Video
        </button>
  
        {/* Preachings label */}
        <h4>Preachings on {topic} (in order!)</h4>
  
        {/* Visual indicator for current video */}
        <div className="progress-indicator">
          {videos.map((video, index) => (
            <span
              key={index}
              className={`circle ${index <= videoIndex ? 'filled' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    )
}

export default ShowAllVideoTopics;