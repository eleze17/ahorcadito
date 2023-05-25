import React, { useEffect } from 'react'

export const Ahorcado = ({statusimage}) => {
   
  console.log(statusimage)

  return (
    <div style={{width:"20%",
    height:"20%",
                display:"flex",
                justifyContent:"flex-end"                
    
    
    }}> 
       {statusimage>0? <img src={`/ahorcado${statusimage}.JPG`} alt="" /> :''}
   </div>
  )
}
