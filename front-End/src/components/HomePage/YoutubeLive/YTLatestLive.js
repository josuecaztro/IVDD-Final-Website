const API_KEY = process.env.REACT_APP_YT_KEY
const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL;

export const getLatestLiveStream = async () => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items.length > 0) {
            for (let item of data.items) {
                const videoId = item.id.videoId;
                const detailsResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${videoId}&key=${API_KEY}`
                );
                const detailsData = await detailsResponse.json();

                if (detailsData.items.length > 0 && detailsData.items[0].liveStreamingDetails) {
                    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
                    console.log('✅Latest Live Stream URL:', `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`);
                    const publishedAt = detailsData.items[0].snippet.publishedAt;
                    return { videoUrl, publishedAt };
                }
                
            }
        }

         return { videoUrl: null, publishedAt: null };
    } catch (error) {
        console.error('❌Error fetching latest uploaded live stream:', error);
        return { videoUrl: null, publishedAt: null };
    }
};
