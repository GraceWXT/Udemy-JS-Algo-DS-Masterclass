# Big O Notation
## Why?
- A way of generalizing code and comparing code and its performance.
- A precise vocabulary, useful for discussing trade-offs, identify inefficient parts in the code
## Timing the code
- Concerns: Faster? Less memory-intensive? More readable? Brevity?
- Built in function `performance.now()`
- Problems: differs on different machines & same machine, speed measurements not precise enough, takes time...
- [Performance tracker tool](https://rithmschool.github.io/function-timer-demo/)
## What?
### Time complexity
- How the _runtime_ of an algorithm grows as the inputs grow / the relationship between the input size and the time relative to that input ➡ broad trends/proportion
- Worst case scenario
- Notation
  | input | runtime | relation | notation |
  |---|---|---|---|
  | f(n) | 1 | constant | O(1) |
  | f(n) | $log{_2}{n}$ | logarithm | O($log{_2}{n}$) |
  | f(n) | $n$ | linear | O(n) |
  | f(n) | $n^2$ | quadratic | O($n^2$) |
  | f(n) | ... | ... | ... |
- Constants don't matter: ~~O(500)~~ → O(1)
- Smaller terms don't matter: ~~O($n^2$ + 5$n$ + 8)~~ → O($n^2$)
- Shorthands:
  - Constant: Arithmetic, variable assignment, accessing elements in an array (by index) or object (by key)
  - Loop: loop.length × complexity inside of the loop

### Space Complexity
- How much additional _memory_ is needed to run the code
- Auxiliary space complexity: not including the space taken up by the inputs itself
- Same notation as time
- Rules:
  - Constant: Most primitives are constant
  - O(n): Strings (where n is the string length), Reference types - arrays and objects (where n is the length/number of keys)

### Logarithm
- Involved in: certain searching (time), efficient sorting (time), recursion (space)
