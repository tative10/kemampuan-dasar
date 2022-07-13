//imperative identik dengan penyataan switch, for, if, throw, etc...
const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
  };
  
  console.log(doubleMap([2, 3, 4]));


//declarative indetik dengan expression atau ekspresi dengan calls, values, and operators
const doubleMp = number => number.map(n => n * 2);
console.log(doubleMp([2, 3, 4]));