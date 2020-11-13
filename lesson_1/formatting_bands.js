let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// ***** modifies the original array *****
// function processBands(data) {
//   return bands.map(band => {
//     updateCountry(band);
//     capitalizeBandName(band);
//     removeDotsInBandName(band);
//     return band;
//   });
// }

// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function capitalizeBandName(band) {
//   band.name = band.name
//                   .split(' ')
//                   .map(capitalizeWord)
//                   .join(' ');
// }

// function removeDotsInBandName(band) {
//   band.name = band.name.replace(/\./g, '');
// }


// ***** returns new array *****
function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizePhrase(str) {
  return str.split(' ')
            .map(capitalizeWord)
            .join(' ');
}

function removeDotsInString(str) {
  return str.replace(/\./g, '');
}

console.log(processBands(bands));
console.log(bands);

// should return:
/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/