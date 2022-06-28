/** A recursive function that returns true is the string passed to it is a palindrome
 * (reads the same forward and backward). Otherwise it returns false. */

// isPalindrome("awesome") // false
// isPalindrome("foobar") // false
// isPalindrome("tacocat") // true
// isPalindrome("amanaplanacanalpanama") // true
// isPalindrome("amanaplanacanalpandemonium") // false

// isPalindrome itself is not recursive in this solution!!!
function isPalindrome(str){
  function reverse(str) {
    if (str.length === 0) return "";
    return reverse(str.slice(1))+ str[0];
  }
  return str === reverse(str);
}

// recursive version implemented with solution hint
function isPalindrome(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, str.length - 1));
  return false;
}
