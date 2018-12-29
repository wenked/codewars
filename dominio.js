function domainName(url){
    //your code here
      let strArr
    if (url.includes('http://www.')){
         strArr = url.split('http://www.').splice(1,1).join('').split('.com').join('')
    }else if (url.includes('https://www')){
        strArr = url.split('https://www.').splice(1,1).join('').split('.com').join('')
    }else {
        if(url.includes('http://')){
        strArr = url.split('http://').join('').split('.com').join('')
        }else {
            strArr = url.split('https://').join('').split('.com').join('')
        }
    }
    
    return strArr
  }

  console.log(domainName('https://google.com'))