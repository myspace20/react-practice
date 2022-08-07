import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/config"
import { createContext, useReducer, useEffect} from 'react'





export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>{

  const authReducer = (state, action)=>{
    switch(action.type){
      case 'LOGIN':
        return {...state, user: action.payload}
      case 'LOGOUT':
        return { user: null }
      case 'AUTH_IS_READY':
        return { user:action.payload, authIsReady: true}
      
      default:
        return state
    }
    
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) =>{
      dispatch({type:'AUTH_IS_READY', payload:user})
      unsub()
    })
  },[])

  const [state, dispatch] = useReducer(authReducer, {
    user : null,
    authIsReady : false
  })

  

console.log(state)


  return(
    <AuthContext.Provider value ={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}