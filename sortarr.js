function sortArray(array) {
    // Return a sorted array.
    const resultado = []
    const indices = []
    const sorteiaEven = (a,i,arr) => {
        if (a%2 != 0){
            resultado.push(a)
            resultado.sort((a,b) => a - b)
            
        }else {
            indices.push(i)
        }
    }
    
    const addOdd = (a,i) => {
         resultado.splice(indices[i],0,array[a])
    }
    
    array.map(sorteiaEven)
    console.log(resultado)
    indices.map(addOdd) 
    //console.log(resultado,indices)

    return resultado
  }

  sortArray([2, 22, 1, 11, 4, 37, 5, 0])

 