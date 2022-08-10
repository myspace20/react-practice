import { useState } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export const useOnAuthStateChanged = () => {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user)=>{
    if(user){
      setUser(user)
    }
  
  })

  return { user }
 
}
