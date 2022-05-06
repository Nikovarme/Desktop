var a=15;
let b=20;
const PI=3.15
//gamotanis gzebi js-shi

console.log(a, b);

a=2;
b=5;
console.log(a, b);
console.log(PI)


console.log(a, b);

a=a+b;
console.log(a);
a+=b; // a=a+b
console.log(a);

a-=b;
console.log(a);
a*=b;
console.log(a);
a/=b;
console.log(a);
a/=2;
console.log(a);

a=29
a%=3;
console.log(a);

a++;
console.log(a);

a--;
console.log(a);

var x=15;

if(x==0){
    console.log(x," aris nulis toli");
}
else if(x>0){
    console.log(x,"dadebiti ricxvia");
}
else{
    console.log(x, "uaryofitiricxvia");
}
function ricxvisgageba(){
    let num = document.getElementById("ricxvi").value;
    if(num==0){
        document.getElementById("pasuxi").innerHTML= num+" არის 0";
    }
    else if(x>0){
        document.getElementById("pasuxi").innerHTML= num+" დადებითია";
    }
    else{
        document.getElementById("pasuxi").innerHTML= num+" უარყოფითია";
    }
}
var number=10;

for(let i=0; i<10; i++){
    console.log(i);
}
for(let i=10; i>=0; i--){
    console.log(i);
}

document.getElementById("text").innerHTML = "salome";
document.getElementById("mshobeli").innerHTML='<div class="shviliko">' +
'<img src="img/07.jpg" alt="drakon">' +
'</div>';