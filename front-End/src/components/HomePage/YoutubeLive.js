import React, { useEffect, useState } from 'react';

function ShowYoutubeLive() {
  const [liveVideoId, setLiveVideoId] = useState(null);
  const youtubeKey = process.env.REACT_APP_YT_KEY;
  const youtubeChannelId = process.env.REACT_APP_YT_CHANNEL;

  const fetchLatestLiveStream = async () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeChannelId}&type=video&order=date&key=${youtubeKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.items && data.items.length > 0) {
        // Find the most recent live stream (or past live)
        const liveVideos = data.items.filter(
          (item) => item.snippet.liveBroadcastContent === 'live' || item.snippet.liveBroadcastContent === 'none'
        );

        if (liveVideos.length > 0) {
          setLiveVideoId(liveVideos[0].id.videoId); // Use the first live video
        } else {
          setLiveVideoId(null); // No live stream available
        }
      } else {
        setLiveVideoId(null); // No videos found
      }
    } catch (error) {
      console.error('Error fetching live stream:', error);
    }
  };

  useEffect(() => {
    fetchLatestLiveStream();
  }, []);

  return (
    <div>
      <h2>Latest Uploaded Live Stream</h2>
      {liveVideoId ? (
        <iframe
          width="616"
          height="347"
          src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest YouTube Live Stream"
        ></iframe>
      ) : (
        <p>No live stream available.</p>
      )}
    </div>
  );
}

export default ShowYoutubeLive;
