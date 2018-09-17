let randomString = "OMG hello wow my best life. Yoda you are such great.";

let splitup = []
let randomwords = [`uhmm`, `hrmm`, `err err err`, `arrghhh`];
for (let i = 1; i < randomString.length; i++) {
  splitup = randomString.split('. ');
}

for (let i = 1; i < splitup.length; i++) {
  splitup = randomString.split(' ');
}

for (let i = 1; i < splitup.length; i += 2) {
  let temp = splitup[i];
  splitup[i] = splitup[i - 1];
  splitup[i - 1] = temp
}

let finalstring = splitup.join(' ')
let almost = finalstring.split('. ');

// for (let i = 1; i < almost.length; i++) {
//     almost[i].push(randomwords[i]);
// }

console.log(splitup)


