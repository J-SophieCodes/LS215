/*
Description:


Problem Definition:
  - input: string
    - possible range separators are: ["-", ":", ".."]
  - output: array of numbers
  - rules/model:
    - only significant part of next number is given
      - only the unit digit
    - numbers in array are always increasing
    - all numbers between range separators should be listed

Examples / Test Cases:
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

Data Structure:
  - input: string
  - rules: mix of number and string
    - log number into array
    - match by string

Algorithm:
  - separate by ","
    - iterate through outer list
    - if element has range delimiting chars
      - split by digits and return all numbers in between
    - if element is a digit, return the next match
*/

const rangeDelimiter = /[\-\:\.]/;
const listDelimiter = /, */;

function expandRange(start, end) {
  let expanded = [];

  for (let num = start; num <= end; num++) {
    expanded.push(num);
  }

  return expanded;
}

function nextNum(lastNum, next) {
  if (lastNum === undefined) return Number(next);

  let significant = next;
  let insignificant = String(lastNum).slice(0, -next.length);

  for (let num = Number(insignificant); ; num++) {
    let nextNum = Number(String(num) + significant);
    if (nextNum > lastNum) return nextNum;
  }

  // while (true) {
  //   if (String(++lastNum).slice(-next.length) === next) {
  //     return lastNum;
  //   }
  // }
}

function last(arr) {
  return arr.slice(-1)[0];
}

function listNumbers(str) {
  let list = str.split(listDelimiter);
  let numList = [];

  for (let idx1 = 0; idx1 < list.length; idx1++) {
    if (rangeDelimiter.test(list[idx1])) {
      let innerList = list[idx1].split(rangeDelimiter);
      let range = [];

      for (let idx2 = 0; idx2 < innerList.length; idx2++) {
        let lastNum = last(range) || last(numList);
        range.push(nextNum(lastNum, innerList[idx2]));
      }

      numList = numList.concat(expandRange(range[0], last(range)));
    } else {
      numList.push(nextNum(last(numList), list[idx1]));
    }
  }

  return String(numList);
}

console.log(listNumbers("1, 3, 7, 2, 4, 1"));
console.log(listNumbers("1-3, 1-2"));
console.log(listNumbers("1:5:2"));
console.log(listNumbers("104-2"));
console.log(listNumbers("104-02"));
console.log(listNumbers("545, 64:11"));