function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits
}

export default maxDigits;
