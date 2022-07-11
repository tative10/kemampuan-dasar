//number 1
function loping(){
for (let i =1; i <=10; i+=1){
    console.log(i)
}
}
loping()

//number 2
function printArray(arr) {
for (var i=0;i<arr.length;i++){
    for(var j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
        }   
    }
}
var arr = [[1, 2],[3, 4],[5, 6],[7, 8]];

  printArray(arr) //1 2 3 4 5 6

//number 3
function even(angka)
{
    for (var a=0; a<angka.length; a++ ){
        // if (a%2==0){
            if (angka[a]%2==0){
            // console.log(`${a} is even number`);
            console.log(angka[a]);
            }
    }
}
// let genap = [1,2][3,4][5,6];
    var angka = [10,26,27,100,28,116,187];  
even(angka)


//number 4
function deletion(array,ele)
{
    for (let b=0;b<array.length;b++){
        if (array[b]==ele){
            array.splice(b,1);
        }
    }
    return array;
}

var array = [1,2,3,4,5,6];   
deletion(array,4)
console.log(array)

//number 5
