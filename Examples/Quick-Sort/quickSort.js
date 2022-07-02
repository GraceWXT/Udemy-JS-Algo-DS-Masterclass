import pivot from "./pivot";

function quickSort(array, start = 0, end = array.length - 1) {
  // recursive case:
  if (start < end) {
    let pivotIdx = pivot(array, start, end);
    // left
    quickSort(arr, start, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, end);
  }
  // Both base case & recursive case:
  return array;
}
