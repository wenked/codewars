function digitRootSort(a) {
    let parDig = []
    let somas = []
    let total = []
    let resultadoPorra = []
    let parsoma
   const criaPar = function (a,b) {
       return {
           vetor:a,
           soma:b
       }
   }
  
   const comparaObj = (a,b) => a.soma - b.soma 
   const comparaVet = (a,b) => {
       if(a.soma === b.soma){
          return a.vetor  - b.vetor
       }
   }
   a.forEach(a => parDig.push(a.toString().split('').map(Number)))
   somas = parDig.map(a => a.reduce((acc,val) => acc + val))
   
   a.forEach((valor,index,arr) => {
       parsoma = criaPar(valor,somas[index])
       total.push(parsoma)
   })
   //console.log(total)
   
   total.sort(comparaObj).sort(comparaVet).forEach(a => resultadoPorra.push(a.vetor))
   console.log(total)
   
/*total.forEach( (a,indx,arr) => {
    for(let i = 0; i <= arr.length-1;i++){
        if(a.soma === arr[i].soma && i!= indx && a.vetor < arr[i].vetor){
            let v1 = a
            let v2 = arr[i]
            arr[indx] = v2
            arr[i] = v1
       }
    }
 })*/

//console.log(aqui)
//console.log(subArray)
//console.log(parDig)
//console.log(somas)
//console.log(a)
console.log(resultadoPorra)
   return resultadoPorra

}

digitRootSort([13, 20, 7, 4])
