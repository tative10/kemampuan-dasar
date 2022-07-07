//binding : untuk mengaitkan variabel yang dideklarasi

let sayur = "banyam";
console.log('nama sayuran ini adalah', sayur);

let a=1, b=2;
console.log(a+b);

//var dan const sama dengan let untuk mendeklarasikan
var lastName=" Forger";
const firstName="Anya";
console.log(firstName+lastName);


//Function
//1. prompt >> untuk menampilkan kotak kecil yang di tahan untuk dapat mengimput data di web browser

//return velue Math.min atau Math.max (x,y)
let nilaiMinimum = (Math.min(4,2)+100); // nilai min adalah 2 karna paling rendah
console.log(nilaiMinimum)


// if else

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " +
//               theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }
//  Ini untuk html dimana Number tidak sama dengan number maka akan kosong, atau muat else

let num = Number(50);
console.log("Pick a number :",num);
if (num < 10)
 {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//while and do while

let number = 0;
while (number <15){
console.log(number);
number = number +2;
}

// let yourName;
// do {
//   yourName = promt("Who are you?");
// } while (!yourName);
// console.log(yourName);

for (let n=0; n<=12; n=n+2){
    console.log(n);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);


switch ("What is the weather like?") {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }