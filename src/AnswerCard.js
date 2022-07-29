import React from 'react'

export default function AnswerCard({answer, pickAnswer,correctAnswer,pickedAnswer}) {
  const isRightAnswer = pickedAnswer && answer === correctAnswer
  const isWorngAnswer = pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer
  const correctClass = isRightAnswer ? 'correct-answer' : ''
  const worngClass = isWorngAnswer ? 'incorrect-answer' : ''
  const disabledClass = pickedAnswer && 'disabled-answer'


  return (
    <div className={`quiz-answer ${correctClass} ${worngClass} ${disabledClass}`} onClick={() => pickAnswer(answer)}>{answer}</div>
  )
}
