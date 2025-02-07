import { useState, useEffect } from "react";
import "./YTLive.css"; 

const API_KEY = process.env.REACT_APP_YT_KEY
const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL;

const checkLiveStatus = async () => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.items.length > 0) {
      return data.items[0].id.videoId; // Live stream exists!
      console.log("API SUCCESS AND LIVE STREAM HAS BEEN FOUND! IT'S CURRENTLY LIVE!")
    } else {
      console.log("No live stream found. API successful though. Just no current livestream.")
      return null; // No live stream found
    }
  } catch (error) {
    console.error("Error fetching live status:", error);
    return null;
  }
};

const LiveStreamBanner = () => {
  const [liveVideoId, setLiveVideoId] = useState(null);

  useEffect(() => {
    async function fetchLiveStatus() {
      const videoId = await checkLiveStatus();
      setLiveVideoId(videoId);
    }

    fetchLiveStatus();
    const interval = setInterval(fetchLiveStatus, 60000); // Check every 60 seconds if there's a live

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {liveVideoId && (
        <div className="live-banner">
          <h2>🔴 ¡En vivo ahora! Ver transmisión:</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
            title="Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default LiveStreamBanner;
