/*
Description:
Write a function that takes any two version numbers in and compares them

Problem Definition:
  - input: string
  - output: string
  - rules/model:
    - If version1 > version2, we should return 1
    - If version1 < version2, we should return -1
    - If version1 === version2, we should return 0
    - if either version numbers have chars other than digits or '.',
      return null

Examples / Test Cases:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Data Structure:
  - input: array
  - rules: array

Algorithm:
  - check version numbers for chars other than digits or '.'
    - return null if invalid chars
  - split each version into an array of numbers by '.'
  - compare the two arrays, element by element
    - return at first instance where eith
*/

function isInvalid(text) {
  return (/(^\.|[^0-9\.]|\.{2,}|\.$)/).test(text);
}

function splitToNums(str) {
  return str.split('.').map(num => Number(num));
}

function fillArray(arr, maxLength) {
  let start = arr.length;
  arr.length = maxLength;
  return arr.fill(0, start, maxLength);
}

function compareVersions(version1, version2) {
  if (isInvalid(version1) || isInvalid(version2)) return null;

  let v1Nums = splitToNums(version1);
  let v2Nums = splitToNums(version2);
  let limit = Math.max(v1Nums.length, v2Nums.length);

  v1Nums = fillArray(v1Nums, limit);
  v2Nums = fillArray(v2Nums, limit);

  for (let idx = 0; idx < limit; idx++) {
    if (v1Nums[idx] > v2Nums[idx]) {
      return 1;
    } else if (v1Nums[idx] < v2Nums[idx]) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

// let versions = ['1.0', '13.37', '1.1.3', '1.1.4', '0.1', '1.2.0.0', '1', '1.2', '1.18.2'];
// console.log(versions.sort(compareVersions));

// function compareVersions(versionA, versionB) {
//   let validChars = /^[0-9]+(\.[0-9]+)*$/;

//   if (!validChars.test(versionA) || !validChars.test(versionB)) {
//     return null;
//   }

//   let aParts = versionA.split('.').map(Number);
//   let bParts = versionB.split('.').map(Number);
//   let maxLength = Math.max(aParts.length, bParts.length);

//   for (let i = 0; i < maxLength; i += 1) {
//     let aValue = aParts[i] || 0;
//     let bValue = bParts[i] || 0;

//     if (aValue > bValue) {
//       return 1;
//     } else if (aValue < bValue) {
//       return -1;
//     }
//   }

//   return 0;
// }