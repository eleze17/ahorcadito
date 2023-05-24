import {useEffect, useRef, useState} from 'react'
import Swal from 'sweetalert2'

export const usePalabra = (palabraoculta) => {
  const [palabrabuscada, setpalabra] = useState([])
  
  const [error, seterror] = useState(0)
  const [completado, setcompletado] = useState(false)
  
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
      let botones = document.querySelectorAll('#botonLetra')
          botones.forEach((e)=>{e.disabled=false
                                e.className=''                  })
                              
           

     seterror(0)
       
     primermov.current=false
          
    }
    else{

      if(target){
        console.log(target)
        let clas
         auxencontrada = palabrabuscada.slice()
         arr.forEach((element,i) => {
        if (element === target.value){
           clas = "correct"
          target.className=clas  
          auxencontrada.splice(i,1,target.value)
          auxencontrada?setpalabra(auxencontrada):''}})
          if (!clas){
          target.className="incorrect"
          let sonido = document.getElementById('audio-error')
          sonido.play()  
          seterror(error + 1)  
          
      }
    
     console.log(completado)
    }
  }
 
}
  
function letras(){

if(!primermov.current && arr.toString()===palabrabuscada.toString() ){

    console.log(primermov.current + '    ' +arr.toString() + '    ' +  palabrabuscada.toString() + '   '+  completado.current) 
            Swal.fire({
            title: 'Finish',
            text: 'Juego terminado,Genio',
            icon: 'success',
            confirmButtonText: 'Siguiente'
            })
            setcompletado(!completado)
            seterror(0)
            setpalabra([])
            primermov.current=true
            let botones = document.querySelectorAll('#botonLetra')
             botones.forEach((e)=>{e.disabled=false
                            e.className=''                  })
                          }
      

    if(error===6 ){
      console.log('error nro   '+ error )
      Swal.fire({
        title: 'Finish',
        text: 'Juego terminado,sos horrible anda a estudiar',
        icon: 'error',
        confirmButtonText: 'Muerto'
      })
      setcompletado(!completado)
      seterror(0)
      setpalabra([])
      primermov.current=true
      let botones = document.querySelectorAll('#botonLetra')
      botones.forEach((e)=>{e.disabled=false
                            e.className=''                  })
                          }

                        }





    return {
      palabrabuscada , armajuego,error,completado,letras, primermov
    }
       

  
}
