import { useState} from "react"
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export  const useLogin = () =>{

  const history = useHistory()

  const [error, setError] = useState(null)

  const login = (email, password) =>{
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        history.push('/dashboard')
        console.log(res, 'logged in')
      })
      .catch((err)=>{
        setError(err)
      })
  }

  return { login, error }


}