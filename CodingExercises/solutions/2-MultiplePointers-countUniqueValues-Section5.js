// Time Complexity - O(n), Space Complexity - O(n) because no need to store the count
function countUniqueValues(array) {
  if (array.length === 0) return array.length; // or `return 0`
  let i = 0;
  // When array.length === 1, the loop with not run
  // and the function returns 1
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}
