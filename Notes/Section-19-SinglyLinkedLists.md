# Singly Linked Lists
## Objectives
- What
- Compare
- Implement insertion, removal and traversal methods on Singly Linked Lists

## What is a Linked List
- A data structure that contains a __head__, __tail__ and __length__ property
- Consists of nodes, and each __node__ has a __value__ and a __pointer__ to another node or null
- Singly: each node is only connected one directionally to the next node

## Comparisons with Arrays
- No indices
- Not allow random access
- Connected via nodes with a __next__ pointer
- Allows quick insertion and deletion

## Big O
- Insertion: push, unshift =>  O(1)
- Removal: shift => O(1), pop => O(n)
- Search and Access: get, set =>O(n)

## Use case
- Excellent alternative to arrays When insertion and deletion at the beginning are frequently required
- Foundation for other data structures like Stacks and Queues
