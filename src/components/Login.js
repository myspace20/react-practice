import { useState } from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import './Login.css'

export default function Login() {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    const user = {
      email, password
    }
    setEmail('')
    setPassword('')
    if(user){
      history.push('/dashboard')
    }

    console.log(user, e)
  }

  return (
    <div className='container'>
      <form id='form'>
            <h1>My Quiz</h1>
            <input placeholder='email' onChange={(e)=>setEmail(e.target.value)} name='email' type='email'/>
            <input placeholder='password' onChange={(e)=>setPassword(e.target.value)} name='password' type='password'/>
            <div className='buttons'>
                <button onClick={handleSubmit}>Login</button>
                <NavLink to='/signup'>
                  <button>Sign Up</button>
                </NavLink>
            </div>
      </form>
    </div>
  )
}
