let string1 = "hello this is a test";
let string2 = "this";


function substring(string1: string, string2: string): any {
  if(string1.indexOf(string2) >= 0) {
    return string1.indexOf(string2);
  } else {
    return -1;
  }
}

// not really sure why this didn't work:
//     if(string1.includes(string2)) {
//     return string1.indexOf(string2);
//   } else {
//     return -1
//   }
// };

console.log(substring("hello this is a test", "not"));