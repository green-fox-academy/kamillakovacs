export function numberConverter(number: number): any {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let converter: any[][] = [[1, 'one']]
  let myNumber: string[] = number.toString().split('');
  let finalString: string = '';

  for ( let i: number = myNumber.length; i > 0; i-- ) {
    if (number === 0) {
      finalString = `zero`;
    } else if (myNumber.length === 1) {
      finalString = ones[number]
    } else if (myNumber.length === 2 && myNumber[0] !== `1`) {
      finalString = tens[myNumber[0]] + ones[myNumber[1]];
    } else if (myNumber.length === 2 && myNumber[0] === `1`) {
      finalString = teens[myNumber[1]];
    } else if (myNumber.length === 3) {
      finalString = ones[myNumber[0]] + ` hundred and ` + tens[myNumber[1]] + ones[myNumber[2]]
    }   
  return finalString;
  }
}
  



console.log(numberConverter(694));