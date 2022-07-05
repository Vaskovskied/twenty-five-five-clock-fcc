import React, { useLayoutEffect, useRef, useState } from "react";
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
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const beep = useRef();

  useLayoutEffect(() => {
    if (timeLeft < 0) {
      if (timerStatus === "session") {
        setTimerStatus(() => "break");
        setTimeLeft(() => breakLength * 60);
        beep.current.currentTime = 0;
        beep.current.play();
      } else {
        setTimerStatus(() => "session");
        setTimeLeft(() => sessionLength * 60);
        beep.current.currentTime = 0;
        beep.current.play();
      }
    }
  }, [
    timeLeft,
    breakLength,
    sessionLength,
    timerStatus,
    setTimerStatus,
    setTimeLeft,
  ]);

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
        beep,
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
      <audio
        id="beep"
        preload="auto"
        ref={beep}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </pomClockContext.Provider>
  );
}
