import React from "react";
import { pomClockContext } from "./PomClock";

function PlayPauseBtn() {
  const {
    isPlaying,
    setPlay,
    setTimeLeft,
    timeLeft,
    timerIntervalId,
    setTimerIntervalId,
  } = React.useContext(pomClockContext);

  const onClickHandler = () => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
      setTimerIntervalId(null);
      return;
    }

    const newIntervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
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
