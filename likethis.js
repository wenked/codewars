function likes(names) {
    // TODO
    //console.log(names)
    let contador = 0
    let resultado = ''
    const imprimeLikes = (a,i,array) => {
        let teste = array.length
        while (contador < 1) {
          switch(teste){
            case 1 :
            resultado = `${a} likes this`
            break;
            case 2 :
            resultado = `${a} and ${array[i+1]} like this`
            break;
            case 3 :
            resultado = `${a},${array[i+1]} and ${array[i+2]} like this`
            break ;
            default :
            resultado = `${a},${array[i+1]} and ${array.length - 2} others like this `
               
           
        }
      contador++
      //resultado = contador)
        }
      }
      //resultado = names.legth)
        
    if (names.length == 0){
        return resultado = 'no one likes this'
    }else {
        names.map(imprimeLikes)
        return resultado
    }
}

console.log(likes(['a','b','c','d','e']))