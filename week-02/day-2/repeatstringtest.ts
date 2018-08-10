function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  
  //Step 2. Else if times is negative, return an empty string if true
  else {
    return "";
  }
}

console.log(repeatStringNumTimes("abc", 3));