import { useState,useEffect } from "react";

export const  useMemoria  = (personaje,cards) =>{

    const [juego, setjuego] = useState(personaje)
    const [arrImagenes, setImagenes] = useState([])
    const [cargado, setcargado] = useState(false)


     function  buscarImagenes(){

        console.log('cartas de buscar imagenes   ' + cards)
        let url = 'https://pokeapi.co/api/v2/pokemon?limit='+cards+'&offset=0'
        if (personaje === 'pokemon'){
             url = 'https://pokeapi.co/api/v2/pokemon?limit='+cards+'&offset=0'
        }

        console.log(url)
        let data = []
        fetch(url)
        .then(res=> res.json())
        .then(res=>{
              res.results.forEach(element => {
                fetch(element.url)
                    .then(respuesta=> respuesta.json())
                    .then(respuesta=> {
                        respuesta.name = element.name
                        data.push(
                            {name : respuesta.name,
                            image :respuesta.sprites.other.dream_world.front_default
                        })
                        data.push(
                            {name : respuesta.name,
                            image :respuesta.sprites.other.dream_world.front_default
                        }
                        
                            ) 

                                for (let i = data.length - 1; i > 0; i--) {
                                    let indiceAleatorio = Math.floor(Math.random() * (i + 1));
                                    let temporal = data[i];
                                    data[i] = data[indiceAleatorio];
                                    data[indiceAleatorio] = temporal;
                                }
                               



                        setImagenes(data.slice())} ) 
                        
                
            })
            
            
     
        })
        setcargado(true)
    }


useEffect(() => {
   
    buscarImagenes()

},[])

return{
    arrImagenes,
    juego,
    cards,
    cargado
}
}

