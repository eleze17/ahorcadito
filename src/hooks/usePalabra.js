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
           aux.push('__')
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
    let sonido = document.getElementById('audio-gane')
      sonido.play()         
    
    Swal.fire({
            title: 'Finish',
            text: 'Juego terminado,Genio',
            width:600,
        imageHeight:150,
            imageUrl: '/ganador.png',
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
      let sonido = document.getElementById('audio-perdi')
      sonido.play()  
      Swal.fire({
        title: 'Finish',
        text: 'Juego terminado,sos horrible anda a estudiar',
        imageUrl: '/perdedor.png',
        width:600,
        imageHeight:150,
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
