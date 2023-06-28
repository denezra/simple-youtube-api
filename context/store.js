"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [videoId, setVideoId] = useState("");
  const [data, setData] = useState([]);

  return (
    <GlobalContext.Provider value={{ videoId, setVideoId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
