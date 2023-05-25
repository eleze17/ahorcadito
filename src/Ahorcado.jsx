import React, { useEffect } from 'react'

export const Ahorcado = ({statusimage}) => {
   
  console.log(statusimage)

  return (
    <div style={{width:"20vw",
                display:"flex",
                justifyContent:"flex-end"                
    
    
    }}> 
       {statusimage>0? <img src={`/ahorcado${statusimage}.JPG`} alt="" /> :''}
   </div>
  )
}
