function newNumeralSystem(number) {
    const alf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    const resultados = []
    function criarPar (v1,v2) {
        return {
            v1,
            v2
        }
    }
    let valoresS
    let letraLower = number.toLowerCase()
    let letraNum = alf.indexOf(letraLower)
    let letrasSoma
    const resultadosAlf = [] 
    let stringSoma 
    let resultadoO
    
    num.forEach((valor,index,array) => {
        for(let i = index; i <= num.length-1 ;i++){        
            if (array[i] === letraNum - valor){
                valoresS = criarPar(valor,array[i])
                resultados.push(valoresS)
                
            }
        }
    })
    resultados.forEach(valor => {
        // console.log(alf[valor.v1])
        letrasSoma = criarPar(alf[valor.v1],alf[valor.v2])
        resultadosAlf.push(letrasSoma)
    })
    resultadoO = resultadosAlf.map(valor => {
        stringSoma = `${valor.v1.toUpperCase()} + ${valor.v2.toUpperCase()}`
        return stringSoma
    })




    console.log(resultados)
    // console.log(resultadosAlf)
    // console.log(resultadoO)
     return resultadoO
}

console.log(newNumeralSystem('k'))
console.log('a')