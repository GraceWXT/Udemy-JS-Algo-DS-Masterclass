# Quadratic sorting algorithms
## Section 11: Bubble Sort
- Good for nearly sorted data
- Time: worst - O($n^2$), best - O(n)
- Space: O(1)

## Section 12: Selection Sort
- similar to bubble sort, but first places small values into sorted position
- Time: worst - O($n^2$), best - O($n^2$)
- - Space: O(1)
- Less memory (space) taken than bubble because there're less swaps

## Section 13: Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted
- Time: worst - O($n^2$), best - O(n)
- Space: O(1)
- Good at almost sorted data / continuously adding more data to a sorted dataset live

# Faster Sorts (Intermediate)
- A family of sorting algorithms that can improve time complexity from O($n^2$) to O($n{log_2}n$)

## Merge Sort
- divide and conquer pattern: split, sorting and merging
- Decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- First implement a function for merging two sorted arrays: O(n+m) both time and space, return a new array (not modify the arrays passed in)
- Time (same for best, average, worst): O($n{log_2}n$)
- Space: O(n) - to store the split and merged arrays

## Quick Sort
- Call the pivot helper on the array to get a pivot index
- Recursively call the pivot helper on the left & right sub-array
- Base case: a __sub-array__ with 1 or 0 elements
- Time:
  - Best & Average - O($n{log_2}n$): ${log_2}n$ decompositions
  - Worst O($n^2$): already sorted - n decompositions -> to get around it, pick a median number as start pivot
- Space: - O(${log_2}n$)

## Radix Sort
- non-comparative sorting algorithm: never makes comparisons between elements
- Exploits the fact that information about the size of a number is encoded in the number of digits
- Only works with integers
- Time: O(nk) where k is the maxDigits/word size
- Space: O(n+k)
