function Employee (firstName){
    this.firstName = firstName;
    this.sayHello = function (name){
        console.info (`Hello ${name}, my name is ${firstName}`);
    }
}

function Manager (firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);  // inheritance ini digunakan untuk memanggil fungsi yang lain. dengan format namafungsi.call (this, parameter)

}

const eko = new Manager ("Eko", "sulisno");
eko.sayHello ("Joko");

console.log (eko);