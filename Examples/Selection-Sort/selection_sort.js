
// Store the first element's index as a temp min
// loop over the array to compare and find the min element
// swap the min element index and the first element index if it's not the first
// repeat with the next element until the array is sorted

function selectionSort(arr) {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(arr, minIdx, i);
    }
  }
  console.log(arr);
  return arr;
}

selectionSort([34, 22, 10, 19, 17])
