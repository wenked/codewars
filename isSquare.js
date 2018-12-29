var isSquare = function(n){
    if (n < 0) {
        return false
    }
    let sqr = Math.sqrt(n)

    if (Number.isInteger(sqr)){
        return true
    }else {
        return false
    }
  }

  console.log(isSquare(0))