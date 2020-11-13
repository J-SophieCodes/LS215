function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function sortedChars(word) {
  return word.split('').sort();
}

function areAnagrams(candidate, word) {
  let candidateChars = sortedChars(candidate);
  let wordChars = sortedChars(word);
  return compareArrays(candidateChars, wordChars);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) return false;
  return array1.every((_, index) => array1[index] === array2[index]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]