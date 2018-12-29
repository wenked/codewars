function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    if (result.length > 0){
        return true
    }else{
        return false
    }
  }
  console.log(howManyRepeated('"Dermatoglyphics"'));