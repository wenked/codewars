function bankRequests(accounts, requests) {
    const requestsConv = requests.map(a => a.split(' '))

    /* recebe um Array como argumento arr[0] = operacao , arr[1] = index da primeira conta 
    arr[2] = index da segunda conta arr[3] = valor a ser manipulado*/
    const trueErro = []
    let erro
    const arrayErro = []
   const requestOp = (req,index) => {
       let index1 = Number(req[1]) - 1
       
         if(req.length === 4){
             if(accounts.length === 1 ){
                 erro = index+1
                 arrayErro.push(-erro)
                 return 
                }else{
                    let index2 = Number(req[2]) - 1
                    let valor = Number(req[3]) 
                    console.log(valor)
                    controle = accounts[index1]
                    if(controle === undefined){
                        erro = index+1
                        arrayErro.push(-erro)
                        return 
                    }else {
                        accounts[index1] = controle - valor
                    }
                    if(accounts[index1] < 0){
                        erro = index+1
                        arrayErro.push(-erro)
                        return 
                    }
                      
                    controle = accounts[index2]
                    if(controle === undefined){
                        erro = index+1
                        arrayErro.push(-erro)
                        return 
                    }else {
                        accounts[index2] = controle + valor 
                    }
           }
         }else {
            let valor2 = Number(req[2])
            if(req[0] === 'deposit'){
               controle = accounts[index1]
               if(isNaN(controle)){
                   erro = index + 1
                   arrayErro.push(-erro)
                   return
               }else {
                   accounts[index1] = controle + valor2
               }
            }else { 
               controle = accounts[index1]
               accounts[index1] = controle - valor2
               if(accounts[index1] < 0 || isNaN(controle)){
                   erro = index+1
                   arrayErro.push(-erro)
                   return 
               }
               
            }
         }
        }
   requestsConv.forEach((a,i) => requestOp(a,i))
   console.log(accounts)
        if(arrayErro.length === 0){
           return accounts
        }else {
            trueErro.push(arrayErro[0])
            return trueErro
        }
}

//console.log(bankRequests([20, 1000, 500, 40, 90],  ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"]))
console.log(bankRequests([20, 1000, 500, 40, 90], ["deposit 6 400", 
"transfer 1 2 30", 
"withdraw 4 50"]))