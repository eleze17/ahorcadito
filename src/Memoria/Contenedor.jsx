import { useMemoria,} from './useMemoria'
import {cardselect} from './funciones'



export const Contenedor = ({personaje,cards}) => {
  
   const  {cargado,arrImagenes} = useMemoria(personaje,cards)
  
     if(cargado===true){
    return (
    

  <div className='contenedor'> 
    

    
      {arrImagenes.map( (pok,index) =>{

        return (
          <div className='memoria' key={pok.name+'#'+index}>
            <div className='memoriaabsoluta'>
              <div className='cardback' name={pok.name} id={pok.name+'_'+index} onClick={()=>cardselect(pok.name+'_'+index)}>
                <img src='/pokemon.jpeg' alt='pokeback' />
              </div>  
              <div className='cardfront' id={'front'+pok.name+'_'+index}>
                <img src={pok.image} alt={pok.name} />
              </div>
            </div>
          </div>
        )
     })
    
   


    }

</div>     
  ) 
}else{
  return(
    <h1>Cargando....</h1>
  )
}



}
