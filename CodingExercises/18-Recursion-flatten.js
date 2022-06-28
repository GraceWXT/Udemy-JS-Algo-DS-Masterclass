/** A recursive function that accepts an array of arrays and returns
 * a new array with all values flattened. */

// Examples:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// base case: the element is not an array: push
// recursive case: the element is an array: concat
function flatten(array){
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
      // concat returns a new array, need to assign it to the result
    } else {
      result.push(element);
    }
  }
  return result;
}
