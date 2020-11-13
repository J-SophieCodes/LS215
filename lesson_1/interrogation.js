function myOwnEvery(array, func) {
  let isAllTrue = true;

  array.forEach(value => {
    if (!func(value)) isAllTrue = false;
  });

  return isAllTrue;
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // expected false; returned true;
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // expected false; returned true;