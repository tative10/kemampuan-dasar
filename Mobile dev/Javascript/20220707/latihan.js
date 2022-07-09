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

//number 6
// function checkeInrange(x){
function checkeInrange(x,start,end){
    // if (x>=5 && x<=10){
        if (x >= start && x <= end){
        console.log(`${x} in Range ${start} and ${end}`);
    }
    else{
        console.log(`${x} not in Range ${start} and ${end}`);
    }

}
checkeInrange(15,5,20)

//number 7
// function evalNumbers(x1,x2){
//     if (x1+x2 == true){
//         console.log(`${x1+x2} adalah penjumlahan`);
//     }
//     else {
//         console.log("Invalid operation");
//     }

// }
// evalNumbers(1,4)

function evalNumber(x1,x2,op){
    if (op== "add"){
        console.log (`${x1+x2} adalah penjumlahan dari ${x1} dan ${x2}`);
    }
    else if (op== "subtract"){
        console.log (`${x1-x2} adalah pengurangan dari ${x1} dan ${x2}`);
    }
    else if (op== "multiply"){
        console.log (`${x1*x2} adalah perkalian dari ${x1} dan ${x2}`);
    }

    else if (op== "devine"){
        console.log (`${x1/x2} adalah pembagian dari ${x1} dan ${x2}`);
    }
    else if (op== "modulo"){
        console.log (`${x1%x2} adalah modulo dari ${x1} dan ${x2}`);
    }
    else {
        console.log("Tidak ada operasi yang dituju, coba lagi")
    }

}
evalNumber(10,2,"devine")

function checkLeapyear (year)
{
    // if (year % 4 == 0 && year % 100 != 0){
    //     console.log(`${year} is leap year`)
    // }
    // else if (year % 4 == 0 || year % 400 == 0)
    // {
    //     console.log (`${year} is leap year`)
    // }
    if (((year % 4 == 0)&& (year % 100 != 0))||(year % 400 == 0)){
        console.log(`${year} is leap year`)
    }
    else {
        console.log(`${year} is not a leap year`)
    }
}
checkLeapyear(2019)

//number 9
function grade(nilai)
{
    if (nilai <= 100 && nilai > 90){
        console.log(`${nilai} S`)
    }
    else if ( nilai <=90 && nilai > 80){
        console.log(`${nilai} A`)
    }
    else if (nilai <= 80 && nilai > 70){
        console.log(`${nilai} B`)
    }
    else if (nilai <=70 && nilai > 60){
        console.log(`${nilai} C`)
    }
    else if (nilai <=60 && nilai > 50)
    {
        console.log(`${nilai} D`)
    }
    else if (nilai <=50 && nilai > 40)
    {
        console.log(`${nilai} E`)
    }
    else{
        console.log("mengulang yaa")
    }
}
grade (90)

//number 10
// function month(range,bulan,year){
//     if (range >=1 && range <= 12){
//         if (bulan == 2){
//             if (((year % 4 ==0 && year % 100 != 0))|| ( year % 400 == 0)) {
//                 console.log ("Februari kabisat 29 days");
//             }
//             else {
//                 console.log ("Februari bukan kabisat 28 days");
//             }
//         }
//         else if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11){
//             console.log ("30 days");
//         }
//         else {
//             console.log("31 days");
//         }
//     }
//     else {
//         console.log ("Invalid Month");
//     }
// }
// month(19,1,2021)

function bulan(year){
    return (((year % 4 == 0) && (year % 100 != 0 ))||(year % 400 ==0));
}

function findDays (wulan,year){
    if (wulan < 1 || wulan > 12){
        console.log(`Invalid Month ${wulan}`)
        return;
    }
    if (wulan == 2){
        if (bulan(year)){
            console.log ("29 days")
        }
        else {
            console.log("28 days")
        }
    }
    else if (wulan == 4 || wulan == 6 | wulan == 9 || wulan == 11){
        console.log("30 days")
    }
    else{
        console.lgo ("31 days")
    }
}
findDays(13,2020)