# Problem Solving Patterns
## Objective
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

## Frequency Counter
- __Use Objects__ or sets to __collect__ values/frequencies of values (usually originally linear structures like array or strings)
- Avoid the need for nesting loops (O($n^2$) operations) with arrays /strings (Time Complexity - __O(n)__)

## Multiple pointers
- Creating __pointers__ or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition (for liner structures, Time Complexity - __O(n)__)
- Very efficient for solving problems with minimal space complexity as well

## Sliding Window
- Creating a window which can either be an array or number from one position to another (looking for a subset of data that is continuous in some way)
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc

## Divide and Conquer (documented name)
- Dividing a data set into smaller chunks and then repeating a process with a subset of data (eg. binary search)
- Can tremendously decrease time complexity (${Log_2}{n}$)
