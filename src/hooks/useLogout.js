import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useState } from 'react'


export const useLogout = () =>{

  const [error, setError] = useState(null)

 const logout = signOut(auth)
//  .then(() =>{
//     console.log('signed out')
//   })
//   .catch(err=>{
//     setError(err)
//   })

  return { logout }
}
