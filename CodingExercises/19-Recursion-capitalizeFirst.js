/** A recursive function that given an array of strings,
 * capitalize the first letter of each string in the array. */

// Example:
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

 function capitalizeFirst (array) {
  let result = [];
  if (array.length === 0) return result;
  let str = array[0];
  result.push(str[0].toUpperCase() + str.slice(1));
  return result.concat(capitalizeFirst(array.slice(1)));
}
