import React from "react";
import { pomClockContext } from "./PomClock";

function PlayPauseBtn() {
  const { setTimeLeft, timerIntervalId, setTimerIntervalId, beep } =
    React.useContext(pomClockContext);

  const onClickHandler = () => {
    if (timerIntervalId) {
      beep.current.currentTime = 0;
      beep.current.pause();
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
      <span className="material-symbols-outlined">
        {!timerIntervalId ? "play_circle" : "pause_circle"}
      </span>
    </button>
  );
}

export default PlayPauseBtn;
