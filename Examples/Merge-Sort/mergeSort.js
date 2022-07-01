import mergeArrays from "./mergeArrays";
// Base case: the array length is 1 or 0
// Recursive case: split the array in halves, sort it and merge it
function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const arr1 = array.slice(0, mid);
  const arr2 = array.slice(mid);
  const sortedArr1 = mergeSort(arr1);
  const sortedArr2 = mergeSort(arr2);
  return mergeArrays(sortedArr1, sortedArr2);
}
