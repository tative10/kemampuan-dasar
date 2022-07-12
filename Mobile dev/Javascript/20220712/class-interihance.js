class Employee {
    sayHello(name){
        console.info (`Hello ${name}, my name is employee ${this.name}`);
    }
}

class Manager extends Employee {  // untuk inheritance di class harus menggunakan extends
    sayHello (name){
        console.info (`Hello ${name}, my name is Manager ${this.name}`);
    }
}

const eko = new Employee ();
eko.name = "Eko";
eko.sayHello ("Joko");

const budi = new Manager ();
budi.name = "Budi";
budi.sayHello ("Eko");