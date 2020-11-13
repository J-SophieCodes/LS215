function isBalanced(str) {
  let tally = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (char === '(') {
      tally++;
    } else if (char === ')') {
      tally--;
    }

    if (tally < 0) return false;
  }

  return tally === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false