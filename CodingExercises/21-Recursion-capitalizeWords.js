/** A recursive function that given an array of words, return a new array
 * containing each word capitalized. */

// Example:
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords (array) {
  if (array.length === 0) return [];
  let result = [array[0].toUpperCase()];
  return result.concat(capitalizeWords(array.slice(1)));
}
