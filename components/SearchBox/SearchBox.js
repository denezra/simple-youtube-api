"use client";

import React, { useEffect, useState, useCallback } from "react";
import styles from "./SearchBox.module.css";
import { useGlobalContext } from "../../context/store";
import { searchVideos } from "../../utils/youtube-api";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const { videoId, setVideoId, data, setData } = useGlobalContext();
  const searchVideo = async () => {
    try {
      let res = await searchVideos(searchText);
      console.log(res);
      setData(res);
      setSearched(true);
    } catch (error) {
      // Handle the error here
      console.log("Error searching videos:", error);
    }
  };

  useEffect(() => {
    if (searched) {
      setVideoId(data[0].id.videoId);
    }
    return () => {};
  }, [data, searched, setVideoId]);

  return (
    <div className="flex items-center w-100 mb-3">
      <input
        type="text"
        placeholder="Search..."
        className={`${styles.input} w-100`}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            searchVideo();
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
