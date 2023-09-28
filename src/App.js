import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import End from "./components/End";
import Question from "./components/Question";
import Start from "./components/Start";
import quizData from "./data/quiz.json";
import MainLayout from './components/mainlayout'
let interval;

const App = () => {
  const dispatch = useDispatch();
  const { step, answers } = useSelector((state) => state?.quizReducer);
  console.log(step);
  console.log(answers);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  return (
    <MainLayout>
      <div className="App">
        {step === 1 && <Start />}
        {step === 2 && <Question />}
        {step === 3 && (
          <End
            data={quizData.data}
            time={time}
            onAnswersCheck={() => setShowModal(true)}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default App;
