/** A function that accepts a string and returns the length of the longest substring
 * with all distinct characters.
 * Time: O(n)
 * @param {string} str
 * @return {number} */

// Examples:
// findLongestSubstring("") // 0
// findLongestSubstring("rithmschool") // 7
// findLongestSubstring("thisisawesome") // 6
// findLongestSubstring("bbbbbb") // 1

// set maxLength to 0;
// set tempLength to 0 -> no need, is end + 1 - start
// set empty object for tracking character indices last seen
// set start to 0
// Loop over the string to move end to the right
// if end char doesn't exist
// init end char in onj, maxLength = max(max, temp)
// if end char exists in the obj, set start to the
function findLongestSubstring(str) {

  let maxLength = 0;
  let start = 0;
  let lastSeen = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (lastSeen[char] !== undefined) { // must be explicit about undefined as it may be zero
      start = Math.max(lastSeen[char] + 1, start);
      // Current char last seen may be before our current start.
      // e.g. "thecatinthehat", when second "e" is seen, start is at "i"
    }
    lastSeen[char] = end;
    const tempLength = end + 1 - start;
    maxLength = Math.max(maxLength, tempLength);
  }

  return maxLength;
}
