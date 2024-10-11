//To repeat the string of given times using own string method

String.prototype.repeatify = function(times){
    if(times<0 || typeof(times)!= 'number'){
    return ''
    }
    let repeatedstring =''
    for(let i=0; i<times; i++){
    repeatedstring += this + `\n`
    }
    return repeatedstring;
    }
    const str ='hello'
    const repeatfun = str.repeatify(3)
    console.log(repeatfun)