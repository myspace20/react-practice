import { useState } from "react"
import { useFetch } from '../hooks/useFetch'
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"



import './Questions.css'


export default function Questions() {


  //states
  const [answer, setAnswer] = useState([])
  const [score, setScore] = useState('')
  const [showScore, setShowScore] = useState(false)
  const [url, setUrl] = useState('http://localhost:3000/results')
  

  const { data } = useFetch(url)

  let qid = 1
  let scoreValue = 0


  
 //getting user input(answers)
  const handleChange = (e) =>{

    const value = e.target.value
    
    setAnswer((old)=>{
      return [...old, value]
    })
  }

  

//submitting answers and adding score
const handleSubmit = async (e) =>{
  e.preventDefault()
  data.forEach((element, index )=> {

  
    if(element.correct_answer ===answer[index]){
      scoreValue += 10
      setScore(scoreValue)
      
    }
    setScore(scoreValue)
    setShowScore(true)
    
  });

  const ref = collection(db, 'scores')

  await addDoc(ref,{
    score: score
  })

}
  
  return (
    <form onSubmit={handleSubmit} >
      {showScore &&<div className="popup-wrapper">
        <div className="popup">
            <div className="popup-content">
                <h2>You Scored</h2>
                <p>{score}%</p>
                <button onClick={()=>setShowScore(false)} className='submit'>Close</button>
            </div>
        </div>
      </div>}
       <div className="heading">
        <h1>Questions</h1>
       </div>
      {data && data.map((question_data, id) =>(
        <div key={id}  className="question">
          <p dangerouslySetInnerHTML={{__html:`${qid}. ${question_data.question}`}}></p>
          <input type="radio" value='True' name={`q${qid}`} onClick={handleChange}/>
          <label htmlFor="q1">True</label>
          <br/>
          <input type="radio" value='False' name={`q${qid ++}`} onClick={handleChange}/>
          <label htmlFor="q1">False</label>
        </div>
      ))}
      <div className="submit">
        <button type="submit" className="submit">Submit</button>
      </div>
    </form>
  )
      }
