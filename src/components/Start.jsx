import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../redux/action/quizAction";
const Start = () => {
  const dispatch = useDispatch();
  // const {time} = useSelector(state => state.quizReducer)
  const [minute, setMinute] = useState(60);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(3600);
  const handleQuizStart = () => {
    dispatch(startQuiz(time));
  };
  useEffect(() => {
    // if (minute > 59) {
    //   setMinute(1);
    // }
    // if (second > 59) {
    //   setSecond(1);
    // }
  }, [minute, second]);
  useEffect(() => {
    const totalSeconds = minute * 60 + second;
    setTime(totalSeconds);
  }, [minute, second]);
  function toTime(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
 }
  return (
    <div className="startBox">
      <div>
        <div>
          <h2>Welcome to Wovvtech React Builder Test</h2>
          <p>Good luck!</p>
          <p>Time:&nbsp;&nbsp;{toTime(time)} hours</p>
          <section>
            <label htmlFor="">
              <input
               disabled={true}
                type="number"
                className="timeInput"
                value={minute}
                onChange={(e) => setMinute(parseInt(e.target.value))}
              />
              min
            </label>
            <label htmlFor="">
              <input
              disabled={true}
                type="number"
                className="timeInput"
                value={second}
                onChange={(e) => setSecond(parseInt(e.target.value))}
              />
              sec
            </label>
          </section>
          <button className="startButton" onClick={handleQuizStart}>
           LET'S GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
