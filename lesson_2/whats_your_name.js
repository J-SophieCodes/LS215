let rlSync = require('readline-Sync');
let name = rlSync.question("What's your name? ");

if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}