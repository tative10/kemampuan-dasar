//Rekursi is a key topic in functional programming. when a function calls itself

var f = (n) => n <= 1 ? 1 : f(n-1) + f(n-2) //(N = (N-1 + N-2))
console.log(f)
f(15)


 