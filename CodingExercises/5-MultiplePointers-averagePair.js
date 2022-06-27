/** Given a sorted array and a target average, returns a boolean that indicates
 * if there is a pair of values in the array where the average of the pair
 * equals the target average. There may be more than one pair that matches the average target.
 * Bonus Constraints:
 * Time: O(n), Space: O(1) */

// Examples:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // false

function averagePair(array, targetAvg) {
  // if array length less than 2, return false
  if (array.length < 2) return false;
  // Set two pointers at the beginning and end of the array
  let i = 0;
  let j = array.length -1;
  // While i < j
  while (i < j) {
    const avg = (array[i] + array[j])/2;
    // Compare avg with target avg, if matches, return true
    if (avg === targetAvg) return true;
    // if avg larger than target, move j down, else move i up
    avg > targetAvg ? j-- : i++;
  }
  // if not found return false
  return false;
}
