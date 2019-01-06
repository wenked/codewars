function isLucky(n) {
    let arrayNum 
    const arrayMetade = []
    const arrayMetade2 = []
    let soma1 
    let soma2
    const somaValor = (acc,val) => acc + val
       arrayNum = n.toString().split('').map(Number)
       let tamanhoMetade = (arrayNum.length/2) - 1
       for (let i = 0; i <= tamanhoMetade ; i++){
           arrayMetade.push(arrayNum[i])
       }
       for (let i = tamanhoMetade+1 ; i < arrayNum.length ; i++){
           arrayMetade2.push(arrayNum[i])
       }
         
       soma1 = arrayMetade.reduce(somaValor)
       soma2 = arrayMetade2.reduce(somaValor)
       console.log(arrayMetade,arrayMetade2)
       console.log(soma1,soma2)
       if(soma1 === soma2){
           return true
       } else {
           return false
       }
    
}


isLucky(134008)