import {useEffect, useRef, useState} from 'react'

export const usePalabra = (palabraoculta) => {
  const [palabrabuscada, setpalabra] = useState([])
  const [acierto, setacierto] = useState(false)
  const primermov= useRef(true)
  let auxencontrada 
   
  function armajuego(letra){
   
    if(primermov.current){
    let aux = [] 


     for(let i = 0 ; i < palabraoculta.length; i++) {
           aux.push('_____')
           setpalabra(aux.slice())
           primermov.current=false
          
          }
   
    }
    else{
      auxencontrada = palabrabuscada.slice()
   
      correcta.current.forEach((element,i) => {
        if (element === letra){
          
          auxencontrada.splice(i,1,letra)
          auxencontrada?setpalabra(auxencontrada):''
   
          
           }
       
        
       })

    ;
       
        console.log(palabrabuscada)
       

    }
  } 
   useEffect(() => {  
    armajuego()
    
   }, [palabrabuscada])


  
  let arr = Array.from(palabraoculta)
  const correcta = useRef(arr)
 
  
 

  
 
    return {
      palabrabuscada , armajuego
    }
       
}
