// print number with corresponding delay without using let
function countWithDelay(){
     for(var i=0; i<5; i++){
        function x(i){
    setTimeout(()=> { 
    
        console.log(i)
    },i*1000);
  
}
x(i);
}
}

countWithDelay();