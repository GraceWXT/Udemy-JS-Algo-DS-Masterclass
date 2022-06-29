/** A function that accepts a sorted array of numbers and a value and returns the index
 * at which the value exists. Otherwise, return -1. */

// Examples:
// binarySearch([1, 2, 3, 4, 5], 2) // 1
// binarySearch([1, 2, 3, 4, 5], 6) // -1

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let mid = Math.floor((end + 1 - start) / 2 + start);
    if (array[mid] === value) return mid;
    array[mid] > value ? (end = mid - 1) : (start = mid + 1); // ± 1 to exclude mid next time!
  }
  if (start === end) {
    return array[start] === value? start : -1;
  }
}
