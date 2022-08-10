import './Dashboard.css'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase/config'
import { signOut } from 'firebase/auth'
import {  useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection,onSnapshot } from 'firebase/firestore'
import { useOnAuthStateChanged } from '../hooks/useOnAuthStateChanged'



export default function Dashboard() {

  const [scores, setScores] = useState(null)

  const { user, setUser } = useOnAuthStateChanged()

    useEffect(()=>{
      const ref = collection(db, 'scores')

      const unsub = onSnapshot(ref, (snapShot)=>{
        let results = []

        snapShot.docs.forEach(doc =>{
          results.push({...doc.data(), id: doc.id})
        })

        setScores(results)
      })

      return () => unsub

    },[])
  

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
            {scores && scores.map(doc =>(
              <div className='card' key={doc.id}>
              <h2>{doc.score}</h2>
          </div>
            ))}
        </div>
    </div>
  )
}
