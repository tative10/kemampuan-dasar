class Employee {
    constructor (firstName){
        this.firstName = firstName;    
    }
    paint (warna){
        console.info (`Ini warna ${warna}`);
    }

    buah (buah){
        console.info (`${buah} rasanya enak`)
    }
}

class Manager extends Employee {
    constructor (firstName,lastName){
        super(firstName); // ini merupakan super constructor yang memiliki kesmaan dengan call. constructor function
        this.lastName = lastName;
        
    }

    sayHello (name){ // ini metod biasa
        console.info (`Hallo ${this.firstName} ${this.lastName}, my name is ${name}`);
        
    }
   coba (){ // ini super metod dimana dengan format super.NAME ().
    super.paint ();
   }

   makanan (){
    console.info ("Makan indomie");
   }

}

const eko = new Manager ("Joko", "Tingkir");
eko.sayHello ("Budi");
eko.paint ("Biru");
eko.buah ("Nangka");
eko.makanan()

const budi = new Employee ("Jaka");
budi.paint ("Merah");
