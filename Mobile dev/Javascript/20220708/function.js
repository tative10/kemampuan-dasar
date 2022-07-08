//function adalah suatu variabel untuk dijadikan fungsi, atau istilahnya menjadi framework

// let square=function(x)
// {
//     return x*x;
// };
// console.log(square(12));

// let a = function (base,exponense){
//     let result = 1;
//     for (let b=0; b<exponense;b++)
//     {
//         result = result * base;
//     }
//     return result;
// }
// console.log(a(2,10));

// let x = 10;
// if (true){
//     let y = 10; 
//     var z = 50;
//     console.log(x+y+z);
// }
// console.log(x+z); // let tidak bisa visible, karena tidak punya local

let a= function(n){
    return n/2;
}
let n = 10;
console.log(a(100)); // ini menuju ke function dimana 100/2, 100 dari bagian ini
console.log(n); // menuju ke n karena tidak adanya penambahan fungsi



console.log("The future says:", future());  // fungsi bisa dideklarasikan di bawah

function future() {
  return "You'll never have flying cars";
}


let ekponen=function(base,eksponen=2){
   let result=1;
for (let b=0;b<eksponen;b++)
{
    result=result*base;
}
return result;
}
console.log(ekponen(2,10));


let kunci = function(z){
  var gembok,y;
  c="";
if (z%2==0){
for ( gembok=0;gembok<z;gembok+=1)
{
  for( y=0;y<z;y+=1){
   if ((gembok+y)%2==0)
   {
    c = c+" ";
   }
   else{
    c = c + "#";
   }
  }
  
  c =c+"\n";
  
}
console.log(c)

}
else{
  console.log("Buuat apa")
}
return z;
}


console.log(kunci(10));

