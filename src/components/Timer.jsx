import React, { useEffect } from "react";
import { pomClockContext } from "./PomClock";

function Timer() {
  const { timeLeft, timerStatus } = React.useContext(pomClockContext);

  const formatTime = (num) => {
    const formatZero = (num) => {
      if (num < 10) {
        return "0" + num;
      } else {
        return "" + num;
      }
    };
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return `${formatZero(minutes)}:${formatZero(seconds)}`;
  };

  return (
    <div className="timer">
      <div className="timer-label" id="timer-label">
        {timerStatus}
      </div>
      <div className="timer-time" id="time-left">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

export default Timer;
