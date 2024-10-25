let next = false;
let cardselectec = []
let movimiento = 1
let pokemon
let ver
let pokeanterior



export function cardselect(target){

    console.log(movimiento)
    console.log(next)
    console.log(cardselectec)
  
   
switch(movimiento) {
    case 1:
   //      pokemon = target.split('_',1)
        cardselectec.push(target)
        ver = document.getElementById(target)
        ver.style.zIndex=5  

        
        movimiento++
    break;
    case 2:
         pokemon = target.split('_',1)
         pokeanterior = cardselectec[0].split('_',1) 
        
        
        if (pokeanterior[0]=== pokemon[0]){
            let ver =document.querySelectorAll(`#front${target}`) 
            ver.item(0).style.zIndex = 50  
            let ver2 =document.querySelectorAll(`#front${cardselectec[0]}`)
            ver2.item(0).style.zIndex = 50 
            cardselectec.splice(0,1)
            movimiento=1
     
         }else{
        pokemon = target.split('_',1)
        let ver = document.getElementById(target)
        ver.style.zIndex=5  
         cardselectec.splice(0,cardselectec.length)
        let elemento = document.getElementsByClassName('cardback')

      /* let cardbacks = document.querySelectorAll(`#front${target}`)
        cardbacks.item(0).style.zIndex = 50
     */
        setTimeout(() => {
            for(let i = 0 ; i<elemento.length;i++){
                console.log(elemento[i].id)
                let ver =   document.getElementById(elemento[i].id)
                ver.style.zIndex=20  } 
            
        }, 500);
        movimiento=1
      
            }
            
    break;


}

}



