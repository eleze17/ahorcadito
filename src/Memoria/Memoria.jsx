
import { Personajes } from './Personajes'
import { Contenedor } from './Contenedor'
export const Memoria = () => {

  let card = Number(prompt('Ingresa numero de pokemones para jugar'))

  return (
    <div>Memoria
    <Personajes/>
    <Contenedor  personaje = 'pokemon' cards = {card}/>
    
    
    
    
    
    
    
    </div>
  )
}
