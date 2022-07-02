/** A function that arranges elements in an array on either side of a pivot
 * so that values less than the pivot are to the left and values greater than
 * the pivot are to the right. The rearrange should be done in place
 * (mutating the array) passed in and return the index of the pivot. */

function pivot(array, start = 0, end = array.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivotIdx = start;
  let pivot = array[start];
  for (let i = 1; i <= end; i++) {
    if (pivot > array[i]) {
      pivotIdx++;
      swap(array, i, pivotIdx); //swap current value to the left
    }
  }
  // swap the pivot value (first value in the array) to the pivot index
  swap(array, start, pivotIdx);
  return pivotIdx;
}

export default pivot;
