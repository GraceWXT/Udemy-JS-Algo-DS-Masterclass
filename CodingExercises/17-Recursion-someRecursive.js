/** A recursive function that accepts an array and a callback, returns true if
 * a single value in the array returns true when passed to the callback.
 * Otherwise it returns false. */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// base case: array.length === 0, return false
function someRecursive(array, callback){
  if (array.length === 0) return false;
  return callback(array[0]) || someRecursive(array.slice(1), callback);
}
