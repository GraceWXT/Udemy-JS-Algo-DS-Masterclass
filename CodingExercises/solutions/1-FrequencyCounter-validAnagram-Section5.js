function validAnagram(str1, str2) {
  // if the length of the two strings doesn't match, return false
  if (str1.length !== str2.length) return false;
  // if matches, loop over one of the strings to construct a frequency object
  let charObj = {}
  for (const char of str1) {
    charObj[char] ? charObj[char]++ : (charObj[char] = 1);
  }
  // Loop over the other string to reduce matching characters in the object
  // to check if the char and corresponding frequency matches
  for (const char of str2) {
    // if the character doesn't exist or frequency left is 0, return false
    if (!charObj[char]) return false;
    charObj[char]--;
  }
  // if both the length and frequency matches, return true
  return true;
}
