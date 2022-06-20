/** A function that accepts a sorted array of numbers,
 * and returns the number of unique (distinctive) values in the array.
 * There can be negative numbers. */

// Examples:
// countUniqueValues([1, 1, 1, 1, 1, 2]) // returns 2
// countUniqueValues([]) // returns 0
// countUniqueValues([-2, -1, -1, 0, 1]) // returns 4

// Time Complexity - O(n), Space Complexity - O(n)
function countUniqueValues(array) {
  // If array.length is less than 2 (0 or 1), return array.length
  if (array.length < 2) return array.length;
  // If array.length >= 2, init count = 1
  let count = 1;
  // Declare two pointer indices at the beginning of the array (pointer and pointer +1)
  // Loop over the array and compare the values at the two pointers
  for (let pointer = 0; (pointer + 1) <= array.length - 1 ; pointer++) {
    // if they are different, count ++
    if (array[pointer] !== array[pointer + 1]) count++;
    // (else do nothing)
  }
  // Return the count
  return count;
}
