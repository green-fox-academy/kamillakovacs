const converter = {
  'A': 14,
  'K': 13,
  'Q': 12,
  'J': 11,
  'T': 10,
 }
 
 const convert = (value => {
  if (Object.keys(converter).indexOf(value) > -1) {
    let result = converter[value].toString();
    return result;
  } else {
    return value;
  }
 });

const highCard = (hand1, hand2) => {
  let temp = [];
  let temp2 = [];

  for (let i = 0; i < 14; i++) {
    if (i % 3 === 0) {
      temp.push(hand1.slice(i, i + 1));
    }
  }  
  
  for (let i = 0; i < 14; i++) {
    if (i % 3 === 0) {
      temp2.push(hand2.slice(i, i + 1));
    }
  }  

  for (let i = 0; i < temp.length; i++) {
    temp[i] = convert(temp[i]);
  }

  for (let i = 0; i < temp2.length; i++) {
    temp2[i] = convert(temp2[i]);
  }

  temp.forEach(e => {
    temp[e] = parseInt(e);
  })

  temp2.forEach(e => {
    temp2[e] = parseInt(e);
  })

  if (temp > temp2) {
    return 'King is better than Ace'
  } else if (temp2 > temp) {
    return 'Ace is better than King'
  }
}

console.log(highCard('2H 3D 5S 9C KD', '2C 3H 4S 8C AH'));
