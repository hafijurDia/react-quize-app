import {useState} from 'react'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
import shuffle from './utils'

function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [startQuize, setStartQuize] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [pickedAnswer, setPickedAnswer] = useState(null)


 

  //select correct answer function
  const pickAnswer = (answer) => {
    setPickedAnswer(answer)
    if (answer === correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1)
    }
    console.log(answer)
  }

  //nextbutton funciton
  const navigateNext = () => {
    let currentQuizeIndex = currentQuestionIndex + 1
    const validQuestionIndex = currentQuizeIndex < quizzes.length
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizeIndex)
      const questions = quizzes[currentQuizeIndex]
      setCurrentAnswer(shuffle(questions))
      setPickedAnswer(null)
      setCorrectAnswer(questions.correct_answer)
    }else{
      setEndGame(true)
    }
    
  }

   //reset quize
   const resetQuiz = () => {
    console.log('reset done')
  }
  
  //satrt quize button fuction
  const fetchQuize = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
    const {results} = await res.json()
    //quizzes all elements
    setQuizzes(results)
    //getting question all answers
    const initialQuestion = results[currentQuestionIndex]
    setCurrentAnswer(shuffle(initialQuestion))
    setCorrectAnswer(initialQuestion.correct_answer)
    setLoaded(true)
    setStartQuize(true)
    console.log(results)
  }

  return (
    <>
      {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
      {!startQuize && <button onClick={fetchQuize}>Start Quize</button>}
      <div className="container">
        {loaded && !endGame && 
        <QuestionCard 
        pickAnswer={pickAnswer}
        quize={quizzes[currentQuestionIndex]} 
        currentAnswers={currentAnswer}
        currentQuestionIndex={currentQuestionIndex}
        quizzes={quizzes}
        correctAnswer={correctAnswer}
        pickedAnswer={pickedAnswer}
        navigateNext={navigateNext}
        />}
        
      </div>
    </>
  );
}

export default App;
