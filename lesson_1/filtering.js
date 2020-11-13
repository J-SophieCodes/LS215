function myFilter(array, func) {
  let newArray = [];

  array.forEach(value => {
    if (func(value)) newArray.push(value);
  });

  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let triples = [{ a: 3, b: 4,  c: 5 },
  { a: 5, b: 12, c: 13 },
  { a: 1, b: 2,  c: 3 },];

console.log(myFilter(triples, isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]