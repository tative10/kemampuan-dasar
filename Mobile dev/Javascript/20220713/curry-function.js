const f = m => console.log(m) //=> that is function
f('test')

//object
const obj = {
    f(m){
        console.log(m);
    }
}
obj.f('tester')


//array
const a = [
    m => console.log(m)
  ]
  a[0]('Testing')


const ab = (m) => () => console.log(m)
const f2 = (f3) => f3()
f2(ab('tww'))

const createF = () => {
    return (m) => console.log(m)
  }
  const c = createF()
  c('Test')

 
  //Higher order Function dimana fungsi yang memanggil fungsi lagi atau fungsi dapat diterima
  //dengan menggunakan library array.map(),array.reduce(), and array.filter()

//Immutability, suatu fungsi yang datanya tidak pernah berubah

const redObj = { color: 'red' }
const yellowObj = Object.assign({}, redObj, {color: 'yellow'}) //.assign untuk membuat kunci baru objek

//.concat () untuk menambah sebuah item di array konstruksi yang biasanya menggunakan push()
const baru = [1,2]
const newEst = [4,2,5].concat(10) // here to append the array one
console.log (newEst)

const nnew = [...newEst,100] //bisa juga menggunakan spread operator ...NAMEITEMS
console.log(nnew)

//.filter () sebagai mengurangi atau menghapus item di array, biasanya menggunakan pop(), dan splice()
const d = newEst.filter((v,k)=> 0 < k) //disini dapat dilihat bahwasannya untuk menghapus nilai dimulai dari 0 untuk array ke-1
console.log(d)


//.map() sebuah array membuat array baru yang mana fungsi terbaru bisa diubah untuk setiap array baru 
const bost = [1,10,40]
const mit = bost.map((v,k)=> v * k) //disini dengan fungsi v*k berarti setiap nilai array baru akan dikalikan array ke-0,1,2.
console.log (mit)

//.reduce() dimana suatu array mampu mengubah bentuk array menjadi apapun, baik skala, fungsi, boolean, dan object
const mamam =  [1,6,2,5]
const nmm = mamam.reduce((partial,v)=> partial+v,0)
const nmmm = mamam.reduce((partial,v)=> partial+v,12) //disini akan menambahkan dengan 12
console.log (nmm)
console.log (nmmm)

