import { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'
import './Login.css'


export default function SignUp() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error } = useSignUp()

  const handleSubmit = (e) =>{
    e.preventDefault()

    signup(name,email, password)
    

   
  }

  return (
    <div className='container'>
      <form id='form'>
            <h1>My Quiz</h1>
            <input placeholder='name' name='name' type='text' onChange={(e) =>{setName(e.target.value)}}/>
            <input placeholder='email' name='email' type='email' onChange={(e) =>{setEmail(e.target.value)}}/>
            <input placeholder='password' name='password' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className='buttons'>
                <button onClick={handleSubmit}>Sign Up</button>
            </div>
            {error && <p>{ error.message }</p>}
      </form>
    </div>
  )
}
