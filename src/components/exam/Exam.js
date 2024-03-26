import React, { useState } from 'react'
import questions from './questions.ts'
import './Exam.css'

function Exam() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const answerChange = (answer) => {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [currentQuestion.id]: answer
      }));
    };
  
    const calculateScore = () => {
      let yesCount = 0;
      for (const answer of Object.values(answers)) {
        if (answer === 'Yes') {
          yesCount++;
        }
      }
      return yesCount === 0 ? 0 : (yesCount / questions.length) * 100;
    };
  
    const nextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const newScore = calculateScore();
        setScore(newScore);
      }
    };
  
    const prevQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    return (
      <div>
        <h1>Test Exam</h1><hr/>
        {currentQuestion && (
          <div key={currentQuestion.id}>
            <h5>{currentQuestion.text}</h5>
            <label>
              <input
                type="radio"
                name="answer"
                value="Yes"
                checked={answers[currentQuestion.id] === 'Yes'}
                onChange={() => answerChange('Yes')}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="No"
                checked={answers[currentQuestion.id] === 'No'}
                onChange={() => answerChange('No')}
              /> No
            </label>
            <br />
            <button className="btn-primary" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button className="btn-primary" onClick={nextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        )}
        {score !== 0 ? (
        <h6>Calculated Score: {score}</h6>
        ) : (
        <h6>Please answer at least one question.</h6>
        )}
      </div>
    );
  }
  
  export default Exam;