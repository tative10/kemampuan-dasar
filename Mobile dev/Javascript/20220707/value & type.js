//tipe data
console.log(typeof 10.5) //tipe data number
console.log(typeof 'a') //tipe data string

// pengurangan, penjumlahan, pembagian, dan pengurangan, serta modulo
console.log(10*100/(100))
console.log(10%3) 


// boolean
console.log(10>15) 
console.log("Bba"<"Apa")  //untuk kasus string, kata lowercase pasti selalu besar dari uppercase. untuk simbol bisa mengacu ke kode ascii untuk yang lebih besar siapa
console.log("kAmu" <"kamu")
console.log(NaN == NaN) // hasilnya false, karena hanya dijavasript yang satu satu kata tidak boleh dengan kata itu sendiri NaN
// Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
console.log("Apel"=="Apel")

// Logical operator
// && = and   ;  || = or
console.log(true&&false)
console.log(false||true)
console.log(((1 + 1) == 2) && ((10 * 10) > 50))
console.log(true? 1:2) //ternary operator atau condisional operator
console.log(false?3:10) //dimana menggunakan ? dan :, untuk true akan mengambil dikiri dan false nilai dikanan
console.log("Naum"&&"Moon") //beda dengan ternary operator dimana logical "and" akan mengambil string sebelah kanan dan logical "or" disebelah kiri
//empty value adalah null dan undefine bukan berarti 0
console.log("sun" && null )
console.log(null || "moon")//hanya or akan mengambil string yang ada kata


