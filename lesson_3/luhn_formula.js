/*
Description:


Problem Definition:
  - input: number in string format
  - output: boolean
  - rules/model:
    - ignore non-numeric chars
    - from right to left: double the value of every second digit
      - if resulting digit > 10 => subtract 9
    - sum the digits
    - if sum % 10 === 0, number is valid; else invalid

Examples / Test Cases:
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6 => invalid
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20 => valid

Data Structure:
  - input: string
  - rules:
    - split into array of numbers

Algorithm:
  -
*/

function doubleEveryOther(digit, idx) {
  if (idx % 2 === 1) {
    let product = digit * 2;
    return product > 9 ? product - 9 : product;
  } else {
    return digit;
  }
}

function sum(total, currentValue) {
  return total + currentValue;
}

function checksum(digits) {
  return  digits.reverse()
                .map(doubleEveryOther)
                .reduce(sum);
}

function parseDigits(input) {
  return input.match(/[0-9]/g)
              .map(digit => Number(digit));
}

function isValid(input) {
  let digits = parseDigits(input);

  return checksum(digits) % 10 === 0;
}

console.log(isValid("2323 2005 7766 3554"));
console.log(isValid("1111"));
console.log(isValid("8763"));