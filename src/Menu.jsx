import { useState } from 'react';
import { Palabra } from './Palabra.jsx';

export const Menu = () => {

    const [categoria, setcategoria] = useState('animales')

  return (<>
    <div className='categorias'>
        <button type="button" className="btn btn-outline-success" onClick={()=>setcategoria('animales')}>Animales</button>
        <button type="button" className="btn btn-outline-info" onClick={()=>setcategoria('paises')}>Paises</button>
        <button type="button" className="btn btn-outline-warning" onClick={()=>setcategoria('nombres')}>Nombres</button>
        <button type="button" className="btn btn-outline-danger" onClick={()=>setcategoria('cosas')}>Cosas</button>
        <button type="button" className="btn btn-outline-warning" onClick={()=>setcategoria('tizi')}>Tizi</button>
        <button type="button" className="btn btn-outline-info" onClick={()=>setcategoria('pokemones')}>Pokemones</button>
        <button type="button" className="btn btn-outline-success" onClick={()=>setcategoria('frutas')}>Frutas</button>
       
       </div>
       <Palabra categoria={categoria}></Palabra>
       </>
  )
}
