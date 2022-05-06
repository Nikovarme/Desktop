function shecvla(){
document.getElementById("text").innerHTML="changed text";
}

var x,y;
x=5;
y=10;

function gamotvla(){
document.getElementById("text").innerHTML=x+y;}


//window.alert(x+y);

console.log(x+y);

x= x+y; //x=5=10  x=15
x +=y; //x=x=y; x=x+y
x*=y; //x=x*y; 25*10
x/=y; //x =x/y 250/10
 
var z=2;
x%=5; // x=x%z
console.log(x);

{
    let a=5;
    var b=15;
}

//console.log(a);
console.log(b);

b++;

console.log(b);

b--;

console.log(b);

for (var i=5; i>=0; i--){
    console.log(i);

}

{
let saxeli="luka";
let gvari="glonti";

console.log(saxeli+" "+gvari)

}
function tagissheqmna()

{
    let tagname= '<div class="kvadrati">';
    let tag2name=' <img src="images.jpg" alt="">';
    let tagend= '</div>';
    
    document.getElementById("mshobeli").innerHTML = tagname + tag2name +tagend;

}



var o=0;

while(o<5){
    
    console.log(o);
    o++;
}
