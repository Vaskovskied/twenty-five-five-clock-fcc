import React, { useState } from "react";
import NumBtn from "./NumBtn";
import PlayPauseBtn from "./PlayPauseBtn";
import ResetBtn from "./ResetBtn";
import Timer from "./Timer";

export const pomClockContext = React.createContext();

export function PomClock() {
  const [timeLeft, setTimeLeft] = useState(1500); // in seconds (25 minutes)
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerStatus, setTimerStatus] = useState("session"); // "session", "break"
  // const [isPlaying, setPlay] = useState(false);
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  return (
    <pomClockContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        timerStatus,
        setTimerStatus,
        sessionLength,
        breakLength,
        setBreakLength,
        setSessionLength,
        timerIntervalId,
        setTimerIntervalId,
      }}
    >
      <div className="pom-clock-container">
        <Timer />
        <div className="play-reset-container">
          <PlayPauseBtn />
          <ResetBtn />
        </div>

        <div className="num-btns-container">
          <NumBtn
            timeLength={breakLength}
            setLength={setBreakLength}
            type={"break"}
          />
          <NumBtn
            timeLength={sessionLength}
            setLength={setSessionLength}
            type={"session"}
          />
        </div>
      </div>
    </pomClockContext.Provider>
  );
}
