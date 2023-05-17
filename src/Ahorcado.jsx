import React from 'react'

export const Ahorcado = ({statusimage}) => {
    console.log(statusimage)
  return (
    <div style={{width:"80vw",
                display:"flex",
                justifyContent:"flex-end"                
    
    
    }}> 
       {statusimage>0? <img src={`./src/assets/ahorcado${statusimage}.JPG`} alt="" /> :''}
   </div>
  )
}
