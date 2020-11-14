/*
Description:
Write a program that cleans up user-entered phone numbers.

Problem Definition:
  - input: string
    - digits
    - special characters: spaces, dash, dot, parentheses
  - output: string
    - if valid number: return cleaned up number
    - if invalid: return 10 '0's
  - rules/model:
    - If less than 10 digits => a bad number.
    - If 10 digits => good.
    - If 11 digits and the first number is 1, 
      - trim the 1 and use the last 10 digits.
    - If 11 digits and the first number is not 1 => bad number.
    - If more than 11 digits => a bad number.

Examples / Test Cases:


Data Structure:
  - input: string
  - rules: 
    - regexp

Algorithm:
  - remove non-digits
  - check for invalid number
    - count digits
*/

function validNumber(digits) {
  return digits.length === 10 || (digits.length === 11 && digits[0] === '1');
}

function process(input) {
  let digits = input.match(/[0-9]/g);

  if (validNumber(digits)) {
    return digits.join('').slice(-10);
  } else {
    return '0000000000';
  }
}

let rlSync = require('readline-Sync');
let userInput = rlSync.question('Please enter your phone number: ');

console.log(process(userInput));