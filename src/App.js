import {useState} from 'react'
import QuestionCard from './QuestionCard'
import shuffle from './utils'

function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [startQuize, setStartQuize] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  //nextbutton funciton
  const navigateNext = () => {
    let currentQuizeIndex = currentQuestionIndex + 1
    const validQuestionIndex = currentQuizeIndex < quizzes.length
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizeIndex)
      const questions = quizzes[currentQuizeIndex]
      setCurrentAnswer(shuffle(questions))
    }else{
      setEndGame(true)
    }
    
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
    setLoaded(true)
    setStartQuize(true)
    console.log(results)
  }

  return (
    <>
      {endGame && <p>Its time to show end game</p>}
      {!startQuize && <button onClick={fetchQuize}>Start Quize</button>}
      <div className="container">
        {loaded && !endGame && 
        <QuestionCard 
        quize={quizzes[currentQuestionIndex]} 
        currentAnswers={currentAnswer}
        currentQuestionIndex={currentQuestionIndex}
        quizzes={quizzes}
        navigateNext={navigateNext}
        />}
        
      </div>
    </>
  );
}

export default App;
