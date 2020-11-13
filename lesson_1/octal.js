function octalToDecimal(numberString) {
  let octals = numberString.split('');
  let decimal = (octal, power) => Number(octal) * (8 ** power);
  let sum = (total, currentValue) => total + currentValue;
  return octals.reverse().map(decimal).reduce(sum);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9