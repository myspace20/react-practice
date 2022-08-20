import './Dashboard.css'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useCollection } from '../hooks/useCollection'

import { useAuthContext } from '../hooks/useAuthContext'



export default function Dashboard() {

  const { user } = useAuthContext()

  const { scores } = useCollection('scores',
    ["id", "==", user.uid]
  )


    const handleLogout = () =>{
      signOut(auth).then(()=>{
        history.push('/')
      })
    }
  

  const history = useHistory()

  const handleClick = () =>{
    history.push('/questions')
  }

  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='welcome'>
        {user && <h2>Hello,  <span>{user.displayName}</span></h2>}
        <img src="https://img.icons8.com/office/60/000000/so-so.png"/>
      </div>
        <button onClick={handleClick}>
            Take a test
        </button>
        <h1>Previous Scores</h1>
        <div className='cards'>
            {scores && scores.map(doc =>(
              <div className='card' key={doc.index}>
              <h2>{doc.score}</h2>
              <h3>{doc.time}</h3>
              <h3>{doc.date}</h3>
          </div>
            ))}
            {!scores && <div>
              <h1>No scores to display</h1>
            </div>}
        </div>
        <div className='logout'>
          <button  onClick={handleLogout}>Log out</button>
        </div>
    </div>
  )
}
