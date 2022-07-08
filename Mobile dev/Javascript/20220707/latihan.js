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

// let a=10;
// let c="";
// for (let x= 0; x<a; x+=1){
//     for (let y=0; y<a; y+=1)
//     {
//         if ((y+x)%2==0){
//             c = c+" ";
//         }
//         else{
//             c= c+"#";
//         }
        
//     }
// c=c+"\n";
// }
// console.log(c)

//Number 1

function numberChoose(num)
{
    if (num % 2 == 0){
    console.log(`${num} Number is Even`);
    }
    else {
        console.log(`${num} Number is Odd`);
    }
}
numberChoose(10)

//Number 2
function isNumber(num){
    // if (num == NaN){
    if (isNaN(num))    {
        console.log(`${num} is not Number`)
    }
    else{
        console.log(`${num} is Number`)
    }
}
isNumber(10)


//Number 3
function finLargest(num1,num2)
{
    if (num1 > num2)
    {
        console.log(`${num1} is bigest`)
    }
    else if (num1 < num2){
        console.log(`${num2} is bigest`)
    }
    else {
        console.log(`${num1} is same ${num2}`)
    }
}
finLargest(10,19)

//Number 4
function findLargest(num1,num2,num3){
    if (num1>num2 && num1>num3)
    {
        console.log(`${num1} is the largest`)
    }
    else if (num2>num3)
    {
        console.log(`${num2} is the largest`)
    }
    else {
        console.log(`${num3} is the largest`)
    }

}
findLargest(10,4,3)


//number 5
function Triagle(s1,s2,s3)
{
    // if (s1==s2&&s2==s3&&s1==s3)
    if (s1==s2 && s2 == s3)
    {
        console.log("Equal")
    }
    else if(s1==s2 || s2==s3 )
    {
        console.log("sama kaki")
    }
    else
    {
        console.log("Unqual")
    }

}
Triagle(2,1,2)