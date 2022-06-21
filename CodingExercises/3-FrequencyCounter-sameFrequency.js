/** A function that given two positive integers,
 * returns a boolean that indicates if the two numbers have the same frequency of digits.
 * Must have Time complexity O(n). */

// Examples
// sameFrequency(182, 281) // return true
// sameFrequency(34, 14) // return false
// sameFrequency(3589578, 5879385) // return true
// sameFrequency(22, 222) // return false

function sameFrequency(int1, int2) {
  // Turn integers to strings
  const str1 = int1.toString();
  const str2 = int2.toString();
  // If the string length doesn't match, return false
  if (str1.length !== str2.length) return false;
  // if matches, create a frequency object from int1
  let frequencyObj = {};
  for (const num of str1) {
    frequencyObj[num] ? frequencyObj[num]++ : (frequencyObj[num] = 1);
  }
  // Loop over int2
  for (const num of str2) {
    // if a number cannot be found or is 0, return false
    if (!frequencyObj[num]) return false;
    // If it can be found, reduce the frequency from obj
    frequencyObj[num] --;
  }
  // If everything matches, return true
  return true;
}
