/** A function that accepts a number and returns the nth number in the Fibonacci sequence.
 * Recall that Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1, and every number thereafter is equal to the sum of the previous two numbers.
 */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// fib(1) = 1;
// fib(2) = 1;
// fib(3) = fib(2) + fib(1) = 2

function fib(n) {
  if (n === 1 || n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
