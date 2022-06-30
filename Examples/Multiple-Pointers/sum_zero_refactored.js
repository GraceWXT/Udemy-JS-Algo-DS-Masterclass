/** A function that accepts a sorted array of integers. Returns the first pair
 * where the sum is 0. Return an array that includes both values that sum to zero
 * or undefined if a pair does not exist. */

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
function sumZero(arr){
  if (arr.length === 0) return undefined;
  // Create two pointers at the start and end of the array
  let i = 0;
  let j = arr.length - 1;
  // While start index is smaller than end index
  while (i < j) {
    let sum = arr[i] + arr[j] ;
    // Check if the sum is zero, return [arr[i], arr[j]]
    if (sum === 0) return [arr[i], arr[j]];
    // If not, larger than zero? Move end down; smaller than zero? Move start up
    if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
  // If not found return undefined
  return undefined;
}


sumZero([-4,-3,-2,-1,0,1,2,5])
