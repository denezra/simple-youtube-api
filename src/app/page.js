"use client";

import Image from "next/image";
import styles from "./page.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoThumbNail from "../../components/VideoThumbNail/VideoThumbNail";
import { useGlobalContext } from "../../context/store";

export default function Home() {
  const { videoId } = useGlobalContext();
  return (
    <main className={`${styles.main} container`}>
      <div className="row">
        <div className="col-12">
          <SearchBox></SearchBox>
        </div>
        {videoId !== "" ? (
          <></>
        ) : (
          <h3 className="text-center">
            Please enter any text on the input box and press key Enter to search
          </h3>
        )}
        <div className="col-12 col-md-7 mb-4 mb-md-0">
          <VideoPlayer></VideoPlayer>
        </div>
        <div className="col-12 col-md-5">
          <VideoThumbNail></VideoThumbNail>
        </div>
      </div>
    </main>
  );
}
