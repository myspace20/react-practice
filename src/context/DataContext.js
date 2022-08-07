import { createContext, useReducer} from 'react'

export const DataContext = createContext()

const dataReducer = (state, action) => {
  
  switch(action.type){
    case 'CHANGE_VALUE':
      return {...state, payload:state}

    default:
      return state
  }
  
}

export const DataProvider = ({ children }) =>{

  const [state, dispatch] = useReducer(dataReducer, null)

  const answerValue = (value) =>{

    dispatch({
      type:'CHANGE_VALUE', payload:value
    })

  }

  return(
    <DataContext.Provider value={{state, answerValue}} >
      {children}
    </DataContext.Provider>
  )
}