// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayTest = [9, 3, 4];
arrayTest[4] = 9;
console.log(arrayTest);
array.forEach((n) => {
  console.log(n);
});

// use map
const newArray = arrayTest.map(i => i + 1);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);

// use push
newArray.push();
console.log(newArray);

// use shift
newArray.shift(5);
console.log(newArray);

// use unshift

// use filter
