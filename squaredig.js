function squareDigits(num){
    const arrNum = num.toString().split('').map(a => Number(a)).map(a => a**2).map(a => a.toString()).join('')
    let resultado = Number(arrNum)
    
    return resultado
  }

  squareDigits(12134)