import React, { useEffect } from 'react'

export const Ahorcado = ({statusimage}) => {


  return (
    <div className='status' > 
       {statusimage>0? <img src={`/ahorcado${statusimage}.JPG`} alt="" /> :''}
   </div>
  )
}
