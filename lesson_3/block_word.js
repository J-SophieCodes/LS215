/*
Description:


Problem Definition:
  - input:
  - output:
  - rules/model:
    - cannot use both letters from any given blocks
    - can only use each block once
    - case-insensitive

Examples / Test Cases:


Data Structure:
  - input:
  - rules:
    -

Algorithm:
  -
*/

function isBlockWord(str) {
  let blocks = [
    ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
    ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
    ['V', 'I'], ['L', 'Y'], ['Z', 'M']
  ];

  for (let idx = 0; idx < str.length; idx++) {
    let blockIndex = blocks.findIndex(block => {
      return block.includes(str[idx].toUpperCase());
    });

    if (blockIndex === -1) return false;
    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true