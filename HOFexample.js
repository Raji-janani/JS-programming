function HOF(double){
    return function(x){
        return double(x)
    }
}


function double(x){
    return x * 2;
}

const doublefunction = HOF(double)(20)
console.log(doublefunction)