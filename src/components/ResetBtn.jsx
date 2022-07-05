import React from "react";
import { pomClockContext } from "./PomClock";

function ResetBtn() {
  const {
    setTimeLeft,
    setTimerStatus,
    setBreakLength,
    setSessionLength,
    timerIntervalId,
    setTimerIntervalId,
  } = React.useContext(pomClockContext);

  const onClickHandler = () => {
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimerStatus("session");
  };

  return (
    <button className="reset-play-btn" id="reset" onClick={onClickHandler}>
      <span className="material-symbols-outlined">refresh</span>
    </button>
  );
}

export default ResetBtn;
