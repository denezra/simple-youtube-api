"use client";

import React, { useEffect, useRef, useState } from "react";
import YouTubePlayer from "youtube-player";
import styles from "./VideoPlayer.module.css";
import { useGlobalContext } from "../../context/store";

/**
 * Load youtube video player component
 * @returns {JSX.Element} The YouTube video player component.
 */
const VideoPlayer = () => {
  let playerRef = useRef(null);
  const [title, setTitle] = useState("");
  const { videoId, setVideoId, data, setData } = useGlobalContext();

  useEffect(() => {
    if (videoId !== "") {
      if (playerRef.current === null) {
        // Initialize the YouTube player
        playerRef.current = YouTubePlayer("player", {
          videoId: videoId,
        });
      } else {
        playerRef.current.loadVideoById(videoId);
      }

      // Optional event listeners
      playerRef.current.on("ready", () => {
        console.log("Player is ready");
      });

      playerRef.current.on("stateChange", (event) => {
        console.log("Player state changed:", event.data);
      });
    }

    if (data.length > 0) {
      data.map((item) => {
        if (item.id.videoId === videoId) {
          setTitle(item.snippet.title);
        }
      });
    }
    // Cleanup on component unmount
    return () => {
      if (videoId !== "") {
        // playerRef.current.destroy();
      }
    };
  }, [data, playerRef, videoId]);

  return (
    <div className="player-container">
      <div id="player" className={styles.playerFrame} />
      <b>{title}</b>
    </div>
  );
};

export default VideoPlayer;
