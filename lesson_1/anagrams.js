function anagram(word, list) {
  let charsCount = (word) => {
    return word.split('').reduce((obj, char) => {
      obj[char] = obj[char] || 0;
      obj[char] += 1;
      return obj;
    }, {});
  };

  let wordCharsCount = charsCount(word);

  let isAnagram = thisWord => {
    let thisCharsCount = charsCount(thisWord);
    let isMatch = char => thisCharsCount[char] === wordCharsCount[char];
    return Object.keys(thisCharsCount).every(isMatch);
  };

  return list.filter(isAnagram);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]