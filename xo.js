function XO(str) {
    //code here
    const resulto = []
    const resultx = []
    const strArray = str.toLowerCase().split("")
    const pegaO = (a) => {
        if (a === 'o'){
            resulto.push(a)
        }
    }
    const pegaX = (a) => {
        if (a === 'x'){
            resultx.push(a)
        }
    }
    strArray.forEach(pegaO)
    strArray.forEach(pegaX)
    if (resulto.length === resultx.length){
        return true
    }else {
        return false
    }
}

function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    console.log('aq',x,o)
    return (x && x.length) === (o && o.length);
  }

  XO2("ooxx")


