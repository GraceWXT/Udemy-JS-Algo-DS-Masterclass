// Start from the second element in the array
// Iterate through the left (sorted) portion and place the element in the correct place
// Continue to the next element until array is sorted

function insertionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // Starting from the second array, continue (increment) until the array is sorted
  for (let i = 1; i < arr.length; i++) {
    // iterating through the left portion
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      } else {
        break; // skip looping the smaller part
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 76, 4, 1, 9]));
