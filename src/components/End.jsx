import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/action/quizAction";
import { formatTime } from "../utils";
import quizData from "../data/quiz.json";
import Modal from "./Modal";
import Trophy from "../assets/images/trophy.png";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { useReactToPrint } from 'react-to-print'
const End = () => {
  const reactToPrintRef = useRef();
  const dispatch = useDispatch();
  const { answers, time } = useSelector((state) => state.quizReducer);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    let correct = 0;
    answers.forEach((result, index) => {
      if (result.a === quizData?.data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);
  const handleReset = () => {
    dispatch(resetQuiz());
  };
  const generatePDF = useReactToPrint({
    content: () => reactToPrintRef.current,
    documentTitle: 'Quiz Result'
  });
  function toTime(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
 }
  return (
    <div className="endBox">
      <img src={Trophy} className="trophy" alt="" srcset="" />
      <h3>Your results</h3>
      <p>
        {correctAnswers} of {quizData?.data.length}
      </p>
      <p>
        <strong>
          {Math.floor((correctAnswers / quizData?.data.length) * 100)}%
        </strong>
      </p>
      <p>
        <strong>Your time:</strong> {toTime(time)}
      </p>
      <section>
        <button className="button" onClick={() => setModal(true)}>
          Check your answers
        </button>
        <button
          className="button"
          style={{ marginLeft: "20px" }}
          onClick={handleReset}
        >
          Try again
        </button>
      </section>
      <Modal show={modal}>
        <section className="modalBody">
          <header>
            <p className=""></p>
            <div style={{ display: "flex", flexDirection: "row", alignSelf: "end" }}>
              <p style={{
                cursor: "pointer", marginRight: 10
              }} onClick={() => generatePDF()}> <GetAppRoundedIcon /> </p>
              <p style={{
                cursor: "pointer"
              }} onClick={() => setModal(false)}>X</p>
            </div>
          </header>
          <div style={{marginTop:10}} ref={reactToPrintRef}>
            <div className="viewResultHeaderBox">
              <img src={Trophy} className="trophy" alt="" srcset="" style={{height:50, width:50}} />
              <h3>Your results</h3>
              <p style={{marginTop:1}}>
                {correctAnswers} of {quizData?.data.length}
              </p>
              <p style={{marginTop:1}}>
                <strong>
                  {Math.floor((correctAnswers / quizData?.data.length) * 100)}%
                </strong>
              </p>
              <p style={{marginTop:1}}>
                <strong>Your time:</strong> {toTime(time)}
              </p>
            </div>
            <section className="content">
              <ul>
                {answers.map((result, i) => (
                  <li key={i} className="mb-6">
                    <p>
                      <strong>{result.q}</strong>
                    </p>
                    <p
                      className={
                        result.a === quizData?.data[i].answer
                          ? "bg-success"
                          : "bg-danger"
                      }
                    >
                      Your answer: {result.a}
                    </p>
                    {result.a !== quizData?.data[i].answer && (
                      <p className="bg-warning">
                        Correct answer: {quizData?.data[i].answer}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default End;
