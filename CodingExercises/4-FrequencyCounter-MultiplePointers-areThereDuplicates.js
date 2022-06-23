/** A function that accepts a variable number of arguments
 * and returns a boolean that indicates if there are duplicates among the arguments
 * passed in
 * Time - O(n), Space - O(n) */
// Bonus: Time - O(n Log n), Space - O(1) => Array.sort, Multiple pointers

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThere Duplicates(1, 2, 2) // true
// areThere Duplicates("a", "b", "c", "a") // true

// Assuming args are always primitives

// Frequency Counter
function areThereDuplicates(...args) {
  // loop over the args array to construct a frequency object
  // if any arg is already initiated, return true
  // if not initiated, initiate it to 1
  let freqObj = {};
  for (const arg of args) {
    if (freqObj[arg]) return true;
    freqObj[arg] = 1;
  }
  // if never found duplicated value, return false
  return false;
}
