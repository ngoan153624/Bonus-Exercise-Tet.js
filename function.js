const sayHello = name => console.log('Hello', name);
sayHello('John');

setTimeout(() => console.log('Loaded'), 2000);

const List = [1, 2, 3];
List.forEach(item => console.log(item));

const getValue = ratio => ratio * 6.9;
const result = getValue(5); 
console.log(result); 


const getValue1 = (a, b = 3, c = 4) => (a * b + c);
const result1 = getValue1(2);
console.log(result1); 
