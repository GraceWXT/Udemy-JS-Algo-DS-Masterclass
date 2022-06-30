const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < array.length; j++) {
      console.log(array, array[j], array[j+1]);
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

// bubbleSort([37, 26, 45, 8]);

function bubbleSortOpt(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(array, array[j], array[j+1]);
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  console.log(array);
  return array;
}

bubbleSortOpt([37, 26, 45, 8]);
