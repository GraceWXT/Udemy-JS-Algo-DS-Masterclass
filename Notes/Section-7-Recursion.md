# Recursion
## Objectives
- What is recursion and how it can be used
- The two essential components of a recursive function
- Visualize the call stack to better debug and understand the recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

## What
- A process (a function in our case) that calls itself

## The call stack
- a __stack__ data structure
- Any time a function is invoked it is placed (__pushed__) on top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove(__pop__)
- When we write recursive functions, we keep pushing new functions onto the call stack

## Two components
- Base case
- Recursive case (Different input)

## Helper Method Recursion vs Pure Recursion
- Helper: Outer non-recursive function has a inner recursive helper function
- Pure:
  - For Arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
  - For strings (immutable), use methods like slice, substr, or substring to make copies of strings
  - For objects, use Object.assign or the spread operator
