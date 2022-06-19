/** Given two strings, return a boolean that indicates if the second string
*  is an anagram of the first. Assume the string contains only lowercase alphabets
*  Time Complexity - O(n)
*
*  Examples:
*  validAnagram("aaz", "zza") // false
*  validAnagram("qwerty", "qeywrt") // true
*/


function validAnagram(str1, str2) {
  // If the string length doesn't match, return false
  if (str1.length !== str2.length) return false;
  // if they match, loop over each string to construct two objects with char and frequency
  let charObj1 = {};
  for (const char of str1) {
    // console.log("Before: char is", char, ", frequency is", charObj1[char])
    charObj1[char] = ++charObj1[char] || 1;
    // If used postfix, with operator after operand (for example, x++),
    // the increment operator increments and returns (therefore assigns to y) the value before incrementing.
    // console.log("After: char is", char, ", frequency is", charObj1[char])
  }
  let charObj2 = {};
  for (const char of str2) {
    charObj2[char] = ++charObj2[char] || 1;
  }
  // console.log("objects:", charObj1, charObj2)
  // Loop over one of the string to check if the frequency of the same key matches
  // if not, return false
  for (const char of str1) {
    if (charObj1[char] !== charObj2[char]) return false;
  }
  // if everything matches, return true
  return true;
}

console.log(validAnagram("aaz", "zza"));
