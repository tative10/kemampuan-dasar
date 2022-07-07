// var a=-14,b=-2,c=-8;

// if (a>0 && b>0 && c>0){
//     console.log("Ini Nilai besar");
// }
// else if (a<0 && b <0 && c<0){
//     if (a>-10 && b>-5 && c<0)
//     {
//         console.log("Ini masih termasuk nilai besar");
//     }
//     else if (a>-15 && b<0 && c>-10)
//     {
//         console.log("Ini masih Termasuk nilai besar")
//     }
// else{
//     console.log("Ini nilai kecil")
// }
// }

// let a=0;
// let b=1;
// while (a<10){
//     b = b+1;
//     a = a+1;
// }
// console.log(b);

// let x,y,c;
// for (x= 1; x<=8; x+=1){
//     for (y=1; y<x; y+=1)
//     {
//         c = c+" ";
//     }
// console.log(c)
// c="";
// }

let a=10;
let c="";
for (let x= 0; x<a; x+=1){
    for (let y=0; y<a; y+=1)
    {
        if ((y+x)%2==0){
            c = c+" ";
        }
        else{
            c= c+"#";
        }
        
    }
c=c+"\n";
}
console.log(c)