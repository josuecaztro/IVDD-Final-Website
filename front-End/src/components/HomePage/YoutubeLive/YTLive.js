import React, { useState, useEffect } from 'react';
import './YTLive.css'; // Import the CSS file

const LiveStatus = () => {
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_YT_KEY; 
  const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL;  

  // Function to check live status
  const checkLiveStatus = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    } catch (err) {
      console.error('Error fetching live status:', err);
      setError('Unable to check live status. Please try again.');
    }
  };

  useEffect(() => {
    checkLiveStatus(); 
    const interval = setInterval(checkLiveStatus, 120000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="live-status-container">
      <h1 id="live-test" className={isLive ? 'live' : 'not-live'}>
        {isLive ? 'We are LIVE now!' : "The church's live stream is not active."}
      </h1>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LiveStatus;
