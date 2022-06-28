/** Given an array of integers and a number, return the maximum sum of a subarray
 * with the length of the number passed to the function.
 * Time: O(n)
 * Space: O(1) */
// Examples:
// maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
// maxSubarraySum([2, 3], 3) // null
function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  // Calculate the sum of the first subarray from index 0
  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;
  // Loop over then array to remove first element from the subarray
  // and push another element at the end and compare the sum with max
  for (let i = 0; i < array.length - num; i++) {
    tempSum = tempSum - array[i] + array[i + num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
