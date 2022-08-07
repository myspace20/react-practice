import './Dashboard.css'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {  useState } from 'react'


export default function Dashboard() {

  const [user, setUser] = useState(null)


    const unsub = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
      }
    
    })
  

    const handleLogout = () =>{
      signOut(auth).then(()=>{
        setUser(null)
      }).then(()=>{
        history.push('/')
        console.log(user)
      })
      
    }
    
  

 
console.log(user)

  const history = useHistory()

  const handleClick = () =>{
    history.push('/questions')
  }

  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      {user && <h2>Welcome,{user.displayName}</h2>}
      <button onClick={handleLogout}>Log out</button>
        <button onClick={handleClick}>
            Take a test
        </button>
        <h1>Previous Scores</h1>
        <div className='cards'>
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
