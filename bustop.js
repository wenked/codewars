var number = function(busStops){
    // Good Luck!
    const totalEntrada = []
    const totalSaida = []
    let resultado
    const entrada = (valor) => totalEntrada.push(valor[0])
    const saida = (valor) => totalSaida.push(valor[1])
    const soma = (acc,valor) => acc + valor
    
    busStops.forEach(entrada)
    busStops.forEach(saida)
    resultado = totalEntrada.reduce(soma,0) - totalSaida.reduce(soma,0)
    

    // console.log(totalEntrada,totalSaida)
    // console.log(resultado)
    return resultado
  }

  number([[10,0],[3,5],[5,8]])