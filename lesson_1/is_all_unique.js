function isAllUnique(string) {
  let chars = string.toLowerCase().replace(/ /g, '').split('');
  let library = [];

  let isUnique = char => {
    if (library.includes(char)) {
      return false;
    }

    library.push(char);
    return true;
  };

  return chars.every(isUnique);
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true