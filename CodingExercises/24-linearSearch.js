/** A function that accepts an array and a value, and returns the index
 * at which the value exists. If the value does not exist in the array, return -1. */

// Examples:
// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([100], 200) // -1

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
