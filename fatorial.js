function factorial(n){
    if (n == 0){
        return 1
    }else if(n < 0 || n >= 12){
       throw new RangeError('a')
        
    }else{
            function range(start = 1, end) {
                return Array(end - start + 1).fill().map((_, idx) => start + idx)
              }
            const arrNum = range(1,n)
            let resultado = arrNum.reduce((a,value) => a*value)
            return resultado

    }
}

factorial(12)