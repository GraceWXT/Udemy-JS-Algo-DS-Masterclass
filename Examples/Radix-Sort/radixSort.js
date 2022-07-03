// Figure out the max digits => to loop maxDigits times
// For each iteration, create buckets of 0 - 9 for each digit
  // loop over the array to place each number in the corresponding bucket based on the current digit
// Replace (spread) the existing array with values in the buckets from 0 to 9
import getDigit from "./getDigit";
import maxDigits from "./digitCount";

function radixSort(nums) {
  const maxDigits = maxDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    // An array of 10 arrays (10 buckets for 0 - 9 with indices 0 - 9)
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let num of nums) {
      let bucketIndex = getDigit(num, k);
      digitBuckets[bucketIndex].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
