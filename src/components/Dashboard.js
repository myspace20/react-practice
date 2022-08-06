import './Dashboard.css'
import { useHistory } from 'react-router-dom'
import { useImperativeHandle } from 'react'

export default function Dashboard() {

  const history = useHistory()

  const handleClick = () =>{
    history.push('/questions')
  }
  

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <h2>Welcome back, Joe</h2>
        <button onClick={handleClick}>
            Take a test
        </button>
        <div className='cards'>
            <h2>Previous Scores</h2>
            <div className='card'>
                <h2>Score:</h2>
                <p>Time Elapsed:</p>
            </div>
            <div className='card'>
                <h2>Score:</h2>
                <p>Time Elapsed:</p>
            </div>
            <div className='card'>
                <h2>Score:</h2>
                <p>Time Elapsed:</p>
            </div>
        </div>
    </div>
  )
}
