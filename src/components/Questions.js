import { useState, useEffect} from "react"

import './Questions.css'


export default function Questions() {

  //states
  const [answer, setAnswer] = useState([])
  const [score, setScore] = useState([])
  const [questions, setQuestions] = useState()
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [answserdata, setAnswserData] = useState([])
  const [time, setTime] = useState()
  const [showTime, setShowTime] = useState(false)
  let qid = 1

  //timer
  const timer = () =>{
    setInterval(() => {
      
    }, 5000);
  }



  
 //getting user input(answers)
  const handleChange = (e) =>{

    const value = e.target.value
    setAnswer((old)=>{
      return [...old, value]
    })
  }

  console.log(answer)

  //fetching and adding quesions
  useEffect(() =>{
    fetch('https://opentdb.com/api.php?amount=10&category=9&type=boolean')
    .then(res => res.json())
    .then(data => setQuestions(data.results ))
    .catch((err)=>{
      alert(err.message)
    })
  },[])



  let scoreValue = 0


//submitting answers and adding score
const handleSubmit = (e) =>{
  e.preventDefault()
  questions.forEach((element, index )=> {

    console.log(element.correct_answer, index)
    

    if(element.correct_answer ===answer[index]){
      scoreValue += 10
      setScore(scoreValue)
      console.log(scoreValue)
    }
    setScore(scoreValue)
    
  });
}
  
  return (
    <form onSubmit={handleSubmit} >
      <div className="score">
        {score}
      </div>
      {questions && questions.map((question_data, id) =>(
        <div key={id}  className="question">
          <p dangerouslySetInnerHTML={{__html:`${qid}. ${question_data.question}`}}></p>
          <label htmlFor="q1">True</label>
          <input type="radio" value='True' name={`q${qid}`} onClick={handleChange}/>
          <br/>
          <label htmlFor="q1">False</label>
          <input type="radio" value='False' name={`q${qid ++}`} onClick={handleChange}/>
        </div>
      ))}
      <div className="submit">
        <button type="submit" className="submit">Submit</button>
      </div>
    </form>
  )
      }
