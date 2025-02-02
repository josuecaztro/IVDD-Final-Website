import { useEffect } from 'react';
import './YTLive.css'; // Import the CSS file

const LiveStatus = () => {
  const API_KEY = process.env.REACT_APP_YT_KEY; 
  const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL;  

  //console.log("The start of your API key is " + API_KEY.slice(0,5) + ".")
  console.log("If you don't see proper characters, the API key can NOT BE READ!")

  // Function to check live status
  const checkLiveStatus = async () => {
    const myurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`;
    try {
      const response = await fetch(myurl);
      const data = await response.json();

      if (response.ok) {
        console.log('YES!!! YouTube API connected successfully:', data);
    } else {
        console.error('NO... YouTube API connection error:', data.error.message);
    }
    } catch (error) {
        console.error('NO... Network error:', error.message);
    }};

  useEffect(() => {
    checkLiveStatus(); 
    const interval = setInterval(checkLiveStatus, 120000);
    return () => clearInterval(interval); 
  }, []);

  //I NEVER RETURN NULL FOR REACT COMPONENTS
  //THIS IS THE FIRST TIME I DID THIS CAUSE I JUST WANT TO CHECK API CONNECTIVITY
  // I AM NOT LOOKING TO RETURN A VISUAL HTML ELEMENT SO THAT'S WHY THIS RETURNS NULL BUT I CAN STILL CALL IT OTHER PLACES
  return null;
};

export default LiveStatus;
