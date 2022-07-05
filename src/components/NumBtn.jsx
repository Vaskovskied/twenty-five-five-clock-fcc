import React from "react";
import { pomClockContext } from "./PomClock";

function NumBtn({ timeLength, setLength, type }) {
  const { timerIntervalId, setTimeLeft, timerStatus } =
    React.useContext(pomClockContext);
  const encrement = () => {
    if (!timerIntervalId && timeLength < 60) {
      setLength(timeLength + 1);
      if (timerStatus === type) {
        setTimeLeft(timeLength * 60 + 60);
      }
    }
  };

  const decrement = () => {
    if (!timerIntervalId && timeLength > 1) {
      setLength(timeLength - 1);
      if (timerStatus === type) {
        setTimeLeft(timeLength * 60 - 60);
      }
    }
  };

  return (
    <div className="num-btn">
      <div className="num-label" id={`${type}-label`}>
        {type}
      </div>
      <div className="num-btn__btn">
        <div className="num-btn-number" id={`${type}-length`}>
          {timeLength}
        </div>
        <div className="crement-btns-container">
          <button
            // disabled={isPlaying}
            className="crement-btn"
            id={`${type}-increment`}
            onClick={encrement}
          >
            <span className="material-symbols-outlined">keyboard_arrow_up</span>
          </button>
          <button
            // disabled={isPlaying}
            className="crement-btn"
            id={`${type}-decrement`}
            onClick={decrement}
          >
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumBtn;
