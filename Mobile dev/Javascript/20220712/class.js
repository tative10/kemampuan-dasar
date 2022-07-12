class Person {
    constructor (name){ // sebagai constructor di construction function
        this.name = name; // property 
        console.info (`Nama saya adalah ${name}`);
    }

    sayHello (name){    //ini sebagai method, dimana yang baik adalah diluar dari intance objek
        console.info (`Hello ${name}, my name is ${this.name}`);
    }
 
}

const eko = new Person ("eko");
console.info (eko);
console.info (eko.name);
eko.sayHello ("Joki");

const budi = new Person ("budi");
budi.sayHello ("Nobi");
