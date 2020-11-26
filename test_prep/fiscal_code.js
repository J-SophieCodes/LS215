/*
Description:
Given personal data, generate the fiscal code

Problem Definition:
  - input: object
  - output: 11 characters uppercase string
  - rules/model:
    - 3 capital letters from surname
      - if there are at least 3 consonants => first 3 consonants returned
      - if less than 3 consonants => consonants + vowels in order
      - if less than 3 letters total => consonant + vowel + 'X'
    - 3 capital letters from name
      - if exactly 3 consonants => all 3 returned
      - if more than 3 consonants => return 1st, 3rd and 4th
      - if less than 3 consonants => consonants + vowels in order
      - if less than 3 letters total => consonant + vowel + 'X'
    - 2 numbers + 1 letter + 2 numbers from date of birth and gender
      - last 2 digis of birth year
      - letter from birth month, based on given conversion table
      - for males: if birth day has one digit => add 0 in front; else return birth day
      - for females: return birth day + 40

Examples / Test Cases:


Data Structure:
  - input:
  - rules:
    -

Algorithm:
  -
*/

const MONTHS = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
                 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

const CONSONANTS = word => word.replace(/[aeiou]/gi, '');
const VOWELS = word => word.replace(/[^aeiou]/gi, '');

function surnameCode(surname) {
  let consonants = CONSONANTS(surname);
  let vowels = VOWELS(surname);

  return (consonants + vowels).slice(0, 3).padEnd(3, 'X');
}

function nameCode(name) {
  let consonants = CONSONANTS(name);
  if (CONSONANTS(name).length > 3) {
    return consonants[0] + consonants.slice(2, 4);
  } else {
    return surnameCode(name);
  }
}

function dobCode(gender, dob) {
  let [date, month, year] = dob.split('/');
  year = year.slice(-2);
  month = MONTHS[month];

  if (gender === 'M') {
    return year + month + date.padStart(2, '0');
  } else {
    return year + month + String(Number(date) + 40);
  }

}

function fiscalCode(person) {
  let first = surnameCode(person.surname);
  let second = nameCode(person.name);
  let third = dobCode(person.gender, person.dob);
  return (first + second + third).toUpperCase();
}

// console.log(fiscalCode({
//   name: "Matt",
//   surname: "Edabit",
//   gender: "M",
//   dob: "1/1/1900"
// }));
// //  "DBTMTT00A01"

// console.log(fiscalCode({
//   name: "Helen",
//   surname: "Yu",
//   gender: "F",
//   dob: "1/12/1950"
// }));
// //  "YUXHLN50T41"

console.log(fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}));
//  "MSOMKY28A16"