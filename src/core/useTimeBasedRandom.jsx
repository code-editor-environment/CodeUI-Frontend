import { useState, useEffect } from "react";

const useTimeBasedRandom = (data) => {
    const getCurrentTimeFrame = () => {
      const hour = new Date().getHours();
      if (hour < 6) return "night"; // từ 0h đến 6h
      if (hour < 12) return "morning"; // từ 6h đến 12h
      if (hour < 18) return "afternoon"; // từ 12h đến 18h
      return "evening"; // từ 18h đến 24h
    };

  const [randomizedArray, setRandomizedArray] = useState([]);
  const [currentTimeFrame, setCurrentTimeFrame] = useState(
    getCurrentTimeFrame()
  );

  const shuffleArray = (array) => {
      const hour = new Date().getHours();
      const date = new Date().getDate();
       let newArray = [...array]; 
       for (let i = newArray.length - 1; i > 0; i--) {
         const j = Math.floor((hour + date) * 0.01 * (i + 1));
         [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
       }
       return newArray; 
  };

  const prioritizeAndShuffle = (array) => {
    const proItems = shuffleArray(
      array.filter((item) => item.status === "pro")
    );
    const nonProItems = shuffleArray(
      array.filter((item) => item.status !== "pro")
    );
    return [...proItems, ...nonProItems];
  };
  useEffect(
    () => {
      setRandomizedArray(prioritizeAndShuffle(data));
      const interval = setInterval(() => {
        const newTimeFrame = getCurrentTimeFrame();
        if (newTimeFrame !== currentTimeFrame) {
          setRandomizedArray(prioritizeAndShuffle(data));
          setCurrentTimeFrame(newTimeFrame);
        }
      }, 3600000);
      return () => clearInterval(interval);
    }, // eslint-disable-next-line
    [data, currentTimeFrame]
  );

  return { randomizedArray };
};

export default useTimeBasedRandom;
