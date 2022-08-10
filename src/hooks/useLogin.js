import { useState} from "react"
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext"

export  const useLogin = () =>{

  const { dispatch } = useAuthContext()

  const history = useHistory()

  const [error, setError] = useState(null)

  const login = async (email, password) =>{
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
        dispatch('LOGIN')
      })
      .then(()=>{
        history.push('/dashboard')
      })
      .catch((err)=>{
        setError(err)
      })
  }

  return { login, error }


}