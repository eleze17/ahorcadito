import { useEffect, useState } from 'react';
import {usePalabra} from './hooks/usePalabra.js'
import React from 'react'
import { abcdario } from './abcdario'
import {palabras} from './assets/arraypalabras.js'
import { Ahorcado } from './Ahorcado.jsx';
 

export const Palabra = ({categoria}) => {

let palabra  
let palabraUsadas = []
let vuelta = 0
const [ahorcado, setahorcado] = useState('')


function palabraAzar() {
let {[categoria]: cat} = palabras
let random = Math.floor(Math.random() * cat.length)
palabra =  cat[random] 

if(palabraUsadas.includes(palabra) && vuelta < 10){
    palabraAzar()
}
palabraUsadas.push(palabra)
vuelta++ 
setahorcado(palabra)

}

const { palabrabuscada,armajuego,error,completado ,letras,primermov} = usePalabra(ahorcado);

useEffect(() => {
    palabraAzar()  
    primermov.current = true
}, [categoria,completado])

useEffect(() => {
     armajuego()
}, [ahorcado])

useEffect(() => {
    
    letras()
  }, [palabrabuscada,error])



return( 
<div className='principal'>
        <h1>PALABRA BUSCADA</h1>
            <div style={{display:"inline-block"}} >

                { palabrabuscada?.map((letra,index)=>{
                    return( <span key={index} id={`letra${index}`} style={{marginRight:"1rem"}}>{letra}
                                </span>
                         
                            )})}
        </div>
        
        <h3>Elegir Letras</h3>
        <div style={{display:"flex", width:"100vw"}}>
        <img src='/tizi.png' style={{width:"20%", height:"20%"}} id='tizi'></img>
        
        <div  className='botonera'>
                            <div style={{width:"70%"}}>
                            {abcdario.map((letra,index)=>{
                                return(
                                <button key={index} id='botonLetra' onClick={(e)=>{armajuego(e.target)
                                                              e.target.disabled = true  
                                                            
                                                            }  
                                } value={letra}>{letra}</button>
                                )
                    
                            })}
                            </div>
                            

        </div>
        <Ahorcado statusimage={error}></Ahorcado>            
        </div> 
          <h3>SI PERDEMOS NO LLORAMOS</h3>
       <audio id="audio-error"src='/windows-error-sound-effect-35894.mp3'></audio>
       <audio id="audio-perdi"src='/perdi.mp3'></audio>
       <audio id="audio-gane"src='/gane.mp3'></audio>
        
        </div> )}