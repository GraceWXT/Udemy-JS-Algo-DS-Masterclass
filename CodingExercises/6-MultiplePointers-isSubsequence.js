/** A function that accepts two strings and returns a boolean that indicates
 * whether the characters in the first string form a subsequence of the characters
 * in the second string. (Whether the characters in the first string appears somewhere
 * in the second string without their order changing.)
 * Time: O(n + m)
 * Space: O(1) */

// Examples:
// isSubsequence("hello", "hello world"); //true
// isSubsequence("sing", "sting"); //true
// isSubsequence("abc", "abracadabra"); //true
// isSubsequence("abc", "acb"); //false (order matters)

function isSubsequence(str1, str2) {
  // If str1 length > str2 length, return false
  if (str1.length > str2.length) return false;
  // Create two pointers at the start of each str
  let i = 0;
  let j = 0;
  // while neither of them reaches the end
  while (i < str1.length && j < str2.length) {
    // Check if the char at the pointers matches
    if (str1[i] === str2[j]) {
      // if matches check if we're at the end of str 1, if so, return true, if not increase both pointers
      if (i === str1.length - 1) return true;
      i++;
      j++;
    } else {
      // if not match, increase j
      j++;
    }
  }
  // if either of them reaches the end before able to return true, return false
  return false;
}
