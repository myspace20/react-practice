import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'


export const useAuthContext = () =>{

  const [error, setError ] = useState(null)

const context = useContext(AuthContext)

  try{
    if(!context){
      throw Error("useAuthContext must be used inside an AuthContextProvider")
    }
  }
  catch(err){
    setError(err)
  }

  return context
}