function x (y){
  console.log("first x is called , it will do some operation then")
  y();
}

function y(){
    console.log("y is called")
  }

x(y);