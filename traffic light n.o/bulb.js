function natura(){
  let a = document.getElementById("bulb").src;
  console.log(a);

  if( a == 'file:///C:/Users/CCT_17/Desktop/traffic%20light%20n.o/img/lightbulb.png'){
   document.getElementById("bulb").src = "img/light.png"}
    
    else{
        document.getElementById("bulb").src= "img/lightbulb.png"
    }
  }
