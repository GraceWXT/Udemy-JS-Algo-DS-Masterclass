// place >= 0
// use absolute value to accommodate negative numbers
function getDigit(number, place) {
  return Math.floor((Math.abs(number) % (10 ** (place + 1))) / 10 ** place)
}

// console.log(getDigit(-12345, 0));
// console.log(getDigit(-12345, 1));
// console.log(getDigit(-12345, 2));
// console.log(getDigit(-12345, 3));
// console.log(getDigit(-12345, 4));
// console.log(getDigit(-12345, 5));

export default getDigit;
