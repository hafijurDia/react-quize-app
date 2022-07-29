import React from 'react'
import AnswerCard from './AnswerCard'

export default function QuestionCard({
    quize, 
    currentAnswers, 
    currentQuestionIndex, 
    quizzes, 
    navigateNext,
    pickAnswer,
    correctAnswer,
    pickedAnswer 
}) {
  return (
    <div className='question-card'>
        <p>Question: {currentQuestionIndex + 1} / {quizzes.length}</p>
        <h3>{quize.question}</h3>
        {currentAnswers.map((answer, i) => (<AnswerCard key={i} answer={answer} pickAnswer={pickAnswer} correctAnswer={correctAnswer} pickedAnswer={pickedAnswer}/>)) }
        <button onClick={navigateNext}>Next</button>
    </div>
  )
}

