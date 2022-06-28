/** A function that accepts a number and adds up all the number
 * from 0 to the number passed to the function */

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// base case: num = 0
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
