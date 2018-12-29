function oddOrEven(array) {
    //enter code here
    let resultado = 0
    const soma = (acc,valor) => acc+valor
    resultado = array.reduce(soma,0) % 2
    if (resultado != 0){
        return 'odd'
    }else {
        return 'even'
    }
 }


 console.log(oddOrEven([0,1,4,55,63,1214,33,1]))