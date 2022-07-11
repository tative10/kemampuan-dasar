//Contruction Function

function Person(){
//parameter contruction function
//function person(firstName, lastName){

    //property ini akan secara otomatis menuju objek
    this.firstName = "";
    //this.firstName = firstName; //mengambil dari parameter function
    this.lastName ="";
    //this.lastName = lastName; // mengambil dari parameter function

    //method construction function
    this.sayHello = function (name){
        console.info (`Hello ${name}, my name is ${this.firstName}`);
    }

}
const eko = new Person();
//const eko = new Person ("Andy", "Mardoyo"); //parameter construction fucntion dengan "new"

eko.firstName = "Eko";
eko.lastName = "sulisno";
eko.sayHello ("joko");

const budi = new Person();
//const budi = nem Person ("Hilda", "Forger"); //parameter contruction function

budi.firstName = "Budi";
budi.lastName = "Jaya";
budi.sayHello ("joko");

console.log (eko);
console.log (budi);