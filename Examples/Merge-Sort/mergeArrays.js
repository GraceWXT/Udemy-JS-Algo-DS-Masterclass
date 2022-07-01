/** A function that takes two sorted arrays (ascending), and returned a new sorted array
 * with all elements in both arrays.
 * Both Time and Space: O(n+m) */

function mergeArrays(arr1, arr2) {
  // Initiate an empty array
  let result = [];
  // Compare the first number of both arrays
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // Push the smaller number to the merged array
    // Compare the next element from the smaller number array to the big number
    // repeat until one of array is all pushed
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // if there're elements left in the other array, push everything to the sorted array
  while (i < arr1.length) {
    result.push(array[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(array[j]);
    j++;
  }
  // return sorted array
  return result;
}

export default mergeArrays;
