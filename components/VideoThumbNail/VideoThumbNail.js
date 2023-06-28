"use client";

import React from "react";
import styles from "./VideoThumbNail.module.css";
import Image from "next/image";
import { useGlobalContext } from "../../context/store";

const VideoThumbNail = () => {
  const { videoId, setVideoId, data, setData, searched, setSearched } =
    useGlobalContext();

  return (
    <>
      {videoId !== "" && data.length > 0 ? (
        data.map((item) =>
          item.id.videoId !== videoId ? (
            <div
              className={`${styles.videoThumbNail} container mb-3`}
              key={item.id.videoId}
              onClick={() => {
                setVideoId(item.id.videoId);
                console.log(videoId);
              }}
            >
              <div className="row" key={item.id.videoId}>
                <div className="col-6">
                  <Image
                    src={item.snippet.thumbnails.medium.url}
                    className="img-fluid"
                    alt={item.snippet.title}
                    width={item.snippet.thumbnails.medium.width}
                    height={item.snippet.thumbnails.medium.height}
                  />
                </div>
                <div className="col-6">
                  <b className={styles.videoThumbNailTitle}>
                    {item.snippet.title}
                  </b>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default VideoThumbNail;
