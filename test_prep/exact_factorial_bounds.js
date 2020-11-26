/*
Description:
Create a function that tests if a number is the exact upper bound of the factorial of n. 
If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".

Problem Definition:
  - input: positive integers
  - output:
    - array [n!, n], or string "Not exact!"
  - rules/model:
    - test if input is the n! of n
    - 1! = 1 = 1
    - 2! = 1*2 = 2
    - 3! = 1*2*3 = 6
    - 4! = 1*2*3*4 = 24

Examples / Test Cases:
isExact(6) ➞ [6, 3]
isExact(24) ➞ [24, 4]
isExact(125) ➞ "Not exact!"
isExact(720) ➞ [720, 6]
isExact(1024) ➞ "Not exact!"
isExact(40320) ➞ [40320, 8]

Data Structure:
  - input: integer
  - rules:
    - array

Algorithm:
  - initialize factorial = 1
  - iterate num from 1, increment by 1, loop as long as factorial <= input
  - factorial *= num
  - return [factorial, num] if factorial === input
  - outside of loop, return "Not exact!"
*/

function isExact(n) {
  let factorial = 1;

  for (let num = 1; factorial <= n; num++) {
    factorial *= num;
    if (factorial === n) {
      return [factorial, num];
    }
  }

  return 'Not exact!';
}


console.log(isExact(6));  //➞ [6, 3]
console.log(isExact(24)); //➞ [24, 4]
console.log(isExact(125));  //➞ "Not exact!"
console.log(isExact(720));  //➞ [720, 6]
console.log(isExact(1024)); //➞ "Not exact!"
console.log(isExact(40320));  //➞ [40320, 8]
console.log(isExact(2));
console.log(isExact(125));
console.log(isExact(721));
console.log(isExact(1024));
console.log(isExact(3628800));
console.log(isExact(20922789888000));
console.log(isExact(41845579776000));