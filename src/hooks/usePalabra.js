import {useEffect, useRef, useState} from 'react'
import Swal from 'sweetalert2'

export const usePalabra = (palabraoculta) => {
  const [palabrabuscada, setpalabra] = useState([])
  const [completado, setcompletado] = useState(false)
  const [error, seterror] = useState(0)
  
     
  
  const primermov= useRef(true)
  let auxencontrada 
  let arr  = Array.from(palabraoculta)

   
  function armajuego(target){

    if(primermov.current && palabraoculta){
    let aux = [] 
    
     for(let i = 0 ; i < palabraoculta.length; i++) {
           aux.push('_____')
           setpalabra(aux.slice())
          }
          primermov.current=false
          
    }
    else{

      if(target){
        let clas
    
         auxencontrada = palabrabuscada.slice()
         arr.forEach((element,i) => {
        if (element === target.value){
           clas = "correct"
          target.className=clas  
          auxencontrada.splice(i,1,target.value)
          auxencontrada?setpalabra(auxencontrada):''
        }
        })
          if (!clas){
          target.className="incorrect"
          let sonido = document.getElementById('audio-error')
          sonido.play()  
          seterror(error + 1)  
          
      }
     
     
    }
  }
}
  
   useEffect(() => { 
    primermov.current=true
    setcompletado(false)
    armajuego() 
     
    

   }, [palabraoculta,completado])

   
   if(!primermov.current && arr.toString()===palabrabuscada.toString() ){
    Swal.fire({
      title: 'Finish',
      text: 'Juego terminado,Genio',
      icon: 'success',
      confirmButtonText: 'Siguiente'
      
    })
    setcompletado(true)
    seterror(0)
    primermov.current=true
    let botones = document.querySelectorAll('#botonLetra')
    botones.forEach((e)=>{e.disabled=false
                          e.className=''                  })
                        
                        console.log(error + '_______' + completado + '______' + primermov.current)}
    if(error===6 ){
      Swal.fire({
        title: 'Finish',
        text: 'Juego terminado,sos horrible anda a estudiar',
        icon: 'error',
        confirmButtonText: 'Muerto'
      })
      setcompletado(true)
      seterror(0)
      primermov.current=true
      let botones = document.querySelectorAll('#botonLetra')
      botones.forEach((e)=>{e.disabled=false
                            e.className=''                  })
                            console.log(error + '_______' + completado + '______' + primermov.current) 
                          }







   


    return {
      palabrabuscada , armajuego,error,completado
    }
       
  
}
