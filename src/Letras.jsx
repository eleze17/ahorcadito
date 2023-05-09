import React from 'react'
import { abcdario } from './abcdario'
import {usePalabra} from './hooks/usePalabra.js'




export const Letras = ({palabra}) => {

    const {armajuego } = usePalabra( palabra );



  return (
    <div style={{width:"350px"}}>
        <h3>Elegir Letras</h3>
        {abcdario.map((letra,index)=>{
            return(
               <button key={index} onClick={(e)=>armajuego(e.target.value)} value={letra}>{letra}</button>
            )

        })}
    </div>
  )
}
