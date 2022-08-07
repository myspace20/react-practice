import { useState } from "react"
import { useHistory } from "react-router-dom"
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export  const useSignUp = () =>{

  const [error, setError] = useState(null)
  const history = useHistory()

  const signup = (name,email, password) =>{
    setError(null)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        updateProfile(auth.currentUser, {
          displayName:name
        })
        .then(console.log('user signed up:',res),
        history.push('/')
        )
      })
      .catch((err)=>{
        setError(err)
      })
  }

  return { signup, error }


}