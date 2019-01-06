function constructArray(size) {
   const resultado = []
   let elemento = 0
   let elemento2 = 0
   let contador = 0
   for (i = 0; i <= size-1; i++){
       if(i % 2 != 0){
          elemento = size - contador
          resultado.push(elemento)
          contador++
       }else {
        elemento2+=1
        resultado.push(elemento2)
       }
    
       
   }
    return resultado
}

console.log(constructArray(7))