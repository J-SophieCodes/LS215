/*
// 12:50 - 1:40 
"Write a function called doubler that doubles every //value// in an //array//"

Description:


Problem Definition:
  - input:any data type
    - array
  - output:
    - array
  - rules/model:
    - varied 

Examples / Test Cases:  
doubler([0.42, -5, 0, -0]);            // [0.84, -10, 0, -0]
doubler([1, 2.1, 3]);                    // [2, 4.2, 6]
doubler([1, 2.1, [3]);                    // [2, 4.2, [3], [3]]
doubler(1); // [2]

input === undefined || typeof === boolean
doubler();                             // "Invalid input"
doubler(undefined);                    // "Invalid input"
doubler(true);                         // "Invalid input"
doubler(false);                        // "Invalid input"

doubler([]); // []
doubler('a'); // ['aa']

doubler([1, 1, true, true, {}, {}]);   // [2, 2, true, true, true, true, {}, {}, {}, {}]
doubler([' ', 'aB', '@', '\n', '1']);  // ["  ", "aBaB", "@@", "\n\n", "11"]
doubler(['a', 'b', undefined]); // ['aa', 'bb', undefined, undefined]

doubler([[1, [2, 3], {}]]);            // [[1, [2, 3], {}], [1, [2, 3], {}]]
doubler([{ a: [1] }]);                 // [{ a: [1] }, { a: [1] }]
typeof (input) === 'object'
doubler({ a: 'A', b: []});            // ["AA", [], []]
doubler({ a: 'A', b: [2, 3], c: 3});            // ["AA", [2, 3], [2, 3], 6]

// doubler(123);                          // [2, 4, 6]
https://launchschool.com/lessons/28467827/assignments/c461b845
pros:
nice way of using the repl
your problem solving skills are top notch
good use of repeat for the string
Good use of a switch statement
Potential:
when you panicked, you didn't stick to your pedac at first (1:07)

Test cases: you want to ask about 4 specific types of questions so you can narrow your test cases down.
1. Input types -> Every type -> Primitives and Objects doubler(function () {});               // "Invalid input"

2. Happy Path Inputs - > String('a'), Number(1)

3. Special values -> '1%$^' '\n', Number -> Infinity, NaN

4. Invalid inputs -> function, boolean -> 'Invalid input'

On problem Solving 
1. What is my actual question
2. What are my test cases
3. ** How do i separate my problem into smaller problems**

Data Structure:
  - input: 
  - rules:
    -

Algorithm:
  - initialize result array to []
  - switch (typeof input)
    - if undefined, boolean => return "invalid input"
    - if string => push return value of doubleString function into result
    - if number => push return value of doubleNUmber function into result
    - if object => push return value of doubleObject function into result
      
  doubleString function
    - input.repeat(2)
    
  doubleNumber function
    - input * 2
    
  doubleObject function
    - switch (typeof element)
      - if string => push return value of doubleString function into result
      - if number => push return value of doubleNUmber function into result
      - if object => push two copies of object into result
      - else => undefined
*/

function doubleString(str) {
  return str.repeat(2);
}

function digits(num) {
  return [...String(num)].map(char => Number(char));
}

function doubleNumber(num) {
  return num * 2;
}

function doubleObjectValue(elt) {
  switch (typeof elt) {
    case 'string':
      return doubleString(elt);
    case 'number':
      return doubleNumber(elt);
    default:
      return [elt, elt];
  }
}

function doubler(input) {
  let result = [];

  switch (typeof input) {
    case 'string':
      result.push([...input].map(char => doubleString(char)));
      break;
    case 'number':
      result.push([...digits(input)].map(digit => doubleNumber(digit)));
      break;
    case 'object':
      Object.values(input).forEach(value => {
        result.push(doubleObjectValue(value));
      });
      break;
    default:
      return "invalid input";
  }

  return result.flat();
}

console.log(doubler([0.42, -5, 0, -0]));            // [0.84, -10, 0, -0]
console.log(doubler([1, 2.1, 3]));                    // [2, 4.2, 6]
console.log(doubler([1, 2.1, [3]]));                    // [2, 4.2, [3], [3]]
console.log(doubler(1)); // [2]

console.log(doubler());                             // "Invalid input"
console.log(doubler(undefined));                    // "Invalid input"
console.log(doubler(true));                         // "Invalid input"
console.log(doubler(false));                        // "Invalid input"

console.log(doubler([])); // []
console.log(doubler('a')); // ['aa']

console.log(doubler([1, 1, true, true, {}, {}]));   // [2, 2, true, true, true, true, {}, {}, {}, {}]
console.log(doubler([' ', 'aB', '@', '\n', '1']));  // ["  ", "aBaB", "@@", "\n\n", "11"]
console.log(doubler(['a', 'b', undefined])); // ['aa', 'bb', undefined, undefined]

console.log(doubler([[1, [2, 3], {}]]));            // [[1, [2, 3], {}], [1, [2, 3], {}]]
console.log(doubler([{ a: [1] }]));                 // [{ a: [1] }, { a: [1] }]

console.log(doubler({ a: 'A', b: []}));            // ["AA", [], []]
console.log(doubler({ a: 'A', b: [2, 3], c: 3}));            // ["AA", [2, 3], [2, 3], 6]

console.log(doubler(123));                          // [2, 4, 6]