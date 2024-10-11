var obj1 ={
    x : "priya",
    y : 20,
    z: {
        a: 10
    }
}

var obj2 ={
    
    y : 20,
    x : "priya",
    z: {
        a: 20
    }
}

// console.log(Object.keys(obj1))

//This is one method to compare
// JSON.stringify(obj1) === JSON.stringify(obj2)

//This is function method

function compareObject( obj1, obj2) {
  
    var key1 = Object.keys(obj1)
    var key2 = Object.keys(obj2)
    if(key1.length !== key2.length){
        return false
    }
   for(var i in key1){
     var prop = key1[i]
     const areObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object'
   
   if(areObjects && !compareObject(obj1[prop],obj2[prop])) {
    return false
   } 

    if(!areObjects && obj1[prop] !== obj2[prop]){
      return false
    }
 }
  return true;
}

console.log(compareObject(obj1,obj2))