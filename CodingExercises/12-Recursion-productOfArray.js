/** A function that takes in an array of numbers and returns
 * the product of them all. */
// Examples:
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// base case: array.length === 1
function productOfArray(array) {
  if (array.length === 1) return array[0];
  return array[0] * productOfArray(array.slice(1));
}
