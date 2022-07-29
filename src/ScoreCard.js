import React from 'react'

export default function ScoreCard({totalScore,resetQuiz}) {
  return (
    <div className="container">
        <div className='question-card score'>
        <h3>Result</h3>
        <p className='score'>Your Score: {totalScore}</p>
        <button onClick={resetQuiz} className='btn restart-btn'>
            Reset Quiz
        </button>
        </div>
    </div>
  )
}
