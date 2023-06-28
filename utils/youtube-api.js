const API_KEY = "AIzaSyBTUsibRffyk1qxA_N0vZTaPZPDVCA7TkU";
/**
 * Function to search for videos using the YouTube API
 * @param {string} query - The search query to search for videos on YouTube
 * @returns {Array<object>} An array of video objects representing the search results
 */
export const searchVideos = async (query) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&part=snippet&type=video&maxResults=5`;
    const response = await fetch(url);
    const data = await response.json();

    const videos = data.items;
    return videos;
  } catch (error) {
    console.error("Error searching for videos:", error);
    return [];
  }
};
