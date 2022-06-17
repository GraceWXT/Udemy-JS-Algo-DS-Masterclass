# Analyzing performance of Arrays and Objects
## Objectives
- How Arrays and Objects work through the lens of Big O
- Why adding elements to the beginning of an array is costly
- Compare and contrast the _runtime_ for arrays and objects, as well as built-in methods

## Objects
### When
- don't need order
- need fast access /insertion and removal
### Big O of Objects
- Insertion, Removal and Access → O(1), constant
- Searching → O($n$), linear
### Big O of Object Methods
- Object.keys/values/entries → O($n$), linear
- Object.hasOwnProperty → O(1), constant

## Arrays
### When
- need order
- need fast access / insertion and removal (sort of...)
### Big O of Arrays
- Insertion and Removal → it depends
- Access → O(1), constant
- Searching → O($n$), linear
### Big O of Array Methods
- Array.push/pop → O(1), constant
- Array.unshift/shift → O($n$), linear
- Array.concat/slice/splice → O($n$), linear
- Array.forEach/map/filter/reduce/etc  → O($n$), linear
- Array.sort O($n$ * log$n$)
