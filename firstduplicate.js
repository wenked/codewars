
function firstDuplicate(a) {
    const indexArr = []
    
    const result = a.filter(function(val){
        return val.indexOf(val) !== val.lastIndexOf(val)
    });
  }
  console.log(firstDuplicate([1,3,4,1,4,3,2]))
  
  