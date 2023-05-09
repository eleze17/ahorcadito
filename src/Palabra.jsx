import { useEffect, useState } from 'react';
import {usePalabra} from './hooks/usePalabra.js'
import React from 'react'

export const Palabra = ({palabra}) => {

const { palabrabuscada} = usePalabra( palabra );


return <>
<h1>PALABRA BUSCADA</h1>
    
        { palabrabuscada?.map((letra,index)=>{
            return(<div style={{display:"inline-block"}} key={index}>
                        <span id={`letra${index}`} style={{marginRight:"20px"}}>{letra}
                        </span>
                    </div>)
})}

</>
}