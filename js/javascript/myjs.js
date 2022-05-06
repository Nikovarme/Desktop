console.log("salome kargi gogoa")
document.write("jsvs is not javascripts !")
function salome(){
    console.log("salome kargi gogoa")
}
function witeli(){
    /*
    1. unda aantos witeli divi +
    2. unda chaaqros yviteli divi 
    3. unda chaaqros mwvane divi 
    */
   document.getElementById("witeli").style.backgroundColor="#FF3600";
   document.getElementById("yviteli").style.backgroundColor="#FFFFFF";
   document.getElementById("mwvane").style.backgroundColor="#FFFFFF";
   
}
function yviteli(){
    document.getElementById("witeli").style.backgroundColor="#FFFFFF";
    document.getElementById("yviteli").style.backgroundColor="#FFF000";
    document.getElementById("mwvane").style.backgroundColor="#FFFFFF";
    
}
function mwvane(){
    document.getElementById("witeli").style.backgroundColor="#FFFFFF";
    document.getElementById("yviteli").style.backgroundColor="#FFFFFF";
    document.getElementById("mwvane").style.backgroundColor="#00FF1F";
}

 
var x=5,y=10,z=x+y;
var a="salome", b="kargi" c="gogoa"
var d=a+' '+b+' '+c;
console.log(z);


document.getElementById("statiatext").innerHTML=d;