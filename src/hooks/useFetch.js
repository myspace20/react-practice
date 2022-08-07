import {useState, useEffect, useCallback} from 'react'



export const useFetch = (url) => {

  const [time, setTime] = useState()
  const [data, setData] = useState(null)





   
const timeCountDown = () =>{

  let timer = setInterval(()=>{
    let date = new Date()
    let seconds = date.getMinutes() * 60 + date.getSeconds()
    let twoMinutes = 60 

    let timeLeft = twoMinutes - seconds % twoMinutes

    // let countDown = parseInt(timeLeft/60) + ':' + timeLeft % 60
      setTime(timeLeft)

      

      console.log(timeLeft)
  },1000)

  if(time === 0){
    clearInterval(timer)
  }
  
}

    


  
  const fetchData = useCallback( async () =>{
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    

    console.log(data)
  },[url])
  
  useEffect(()=>{
    
    fetchData()
  

  },[fetchData,])

  return { data, time}
}


