import React from "react";
import { pomClockContext } from "./PomClock";

function PlayPauseBtn() {
  const {
    setTimeLeft,
    breakLength,
    sessionLength,
    timerIntervalId,
    setTimerIntervalId,
    timerStatus,
    setTimerStatus,
  } = React.useContext(pomClockContext);

  const onClickHandler = () => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
      setTimerIntervalId(null);
      return;
    }

    const newIntervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime < 0) {
          if (timerStatus === "session") {
            setTimerStatus("break");
            return breakLength * 60;
          }
          if (timerStatus === "break") {
            setTimerStatus("session");
            return sessionLength * 60;
          }
        }
        return newTime;
      });
    }, 1000);
    setTimerIntervalId(newIntervalId);
  };

  return (
    <button className="reset-play-btn" id="start_stop" onClick={onClickHandler}>
      <span className="material-symbols-outlined">play_circle</span>
    </button>
  );
}

export default PlayPauseBtn;
