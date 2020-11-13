function acronym(string) {
  let delimiter = /[ -]/;
  let firstLetter = word => word[0];
  return string.split(delimiter).map(firstLetter).join('').toUpperCase();
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"