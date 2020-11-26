/*
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - only arrays
  VALUES
  - Normal (string, booleans, numbers)
  - Special (.567, -3)
  EDGE CASES:
  - Invalid Input or Values (data types or values)
  - Emptiness (null/nil, '', [], {}): return empty Array
  - Repetition/duplication: return a nested array of all dupes
  - Uppercase/Lowercase strings/chars: case sensitive
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - 
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors

Description:
Create a function that takes in an array of elements and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

Problem Definition:
  - input: array
  - output: array of nested arrays
  - rules/model:
    - elements:
      - string (===)
        - case-sensitive comparison
      - number
        - regular nums
        - NaN
      - boolean 
      - undefined
      - no objects (no nested arrays or objects)
    - 

Examples / Test Cases:
non-array => invalid input
[] => [] and log "this is an empty array!"
[1, 2, [], {}] => invalid input (objects in array)

['aa', 'aa'] => [['aa', 'aa']]
['aa', 'Aa'] => [['aa'], ['Aa']]
['a', 'aa'] => [['a'], ['aa']]
[1, 2, 2, 3] => [[1], [2, 2], [3]]

Data Structure:
  - input: array
  - rules: mixed
    -

Algorithm:
  - initialize object to store unique elements and the list of appearances
    result = {}
    e.g. { 'aa': ['aa', 'aa']}
    Object.values(result) => [['aa', 'aa']]
  - check if input is an array Array.isArray(input) 
    - return "Invalid input" if not an array
  - check if array is empty
    - return [] and log message if empty input array
  - array.some(...) check if any element is a typeof object
    - return "invalid input" if so
  - loop through each element of the input array
    - result[elt]
      - if undefined => result[elt] = [elt]
      - else => result[elt].push(elt)
  - return Object.values(result)

*/

function subarrays(arr) {
  if (!Array.isArray(arr)) return "Invalid Input";

  if (arr.length === 0) {
    console.log("This is an empty array!");
    return arr;
  }

  if (arr.some(elt => typeof elt === 'object')) {
    return "Invalid input";
  }

  let result = {};

  arr.forEach(elt => {
    if (result[elt]) {
      result[elt].push(elt);
    } else {
      result[elt] = [elt];
    }
  });

  return Object.values(result);
}

// non-array => invalid input
console.log(subarrays(1));
console.log(subarrays('a'));
console.log(subarrays({}));
// [] => [] and log "this is an empty array!"
console.log(subarrays([]));
// [1, 2, [], {}] => invalid input (objects in array)
console.log(subarrays([1, 2, [], {}]));
// ['b', 'aa', 'aa'] => [['b'], ['aa', 'aa']]
console.log(subarrays(['b', 'aa', 'aa']));
// ['aa', 'Aa'] => [['aa'], ['Aa']]
console.log(subarrays(['aa', 'Aa']));
// ['a', 'aa'] => [['a'], ['aa']]
console.log(subarrays(['a', 'aa']));
// [1, 2, 2, 3] => [[1], [2, 2], [3]]
console.log(subarrays([1, 2, 2, 3]));

console.log(subarrays([1, undefined, undefined, 1, 5]));
console.log(subarrays([1, NaN, 2, 'a', NaN]));
console.log(subarrays([5, 5, 5, 2, 1, 1, 3, 3, 4, 3]));