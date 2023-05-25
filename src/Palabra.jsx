import { useEffect, useState } from 'react';
import {usePalabra} from './hooks/usePalabra.js'
import React from 'react'
import { abcdario } from './abcdario'
import {palabras} from './assets/arraypalabras.js'
import { Ahorcado } from './Ahorcado.jsx';
 

export const Palabra = ({categoria}) => {

let palabra  

const [ahorcado, setahorcado] = useState('')


function palabraAzar() {
let {[categoria]: cat} = palabras
let random = Math.floor(Math.random() * cat.length)
palabra =  cat[random] 
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
                    return( <span key={index} id={`letra${index}`} style={{marginRight:"20px"}}>{letra}
                                </span>
                         
                            )})}
        </div>
        
        <h3>Elegir Letras</h3>
        <div style={{display:"flex"}}>
        <img src='./public/tizi.png' style={{width:"200px"}} id='tizi'></img>
        
        <div  className='botonera'>
                            <div style={{width:"700px"}}>
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
        </div> 
        <Ahorcado statusimage={error}></Ahorcado>               
       <audio id="audio-error"src='./public/windows-error-sound-effect-35894.mp3'></audio>
        
        </div> )}