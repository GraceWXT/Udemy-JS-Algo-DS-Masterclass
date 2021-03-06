// Class: Node
// a piece of data - val
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // SinglyLinkedList must have properties: head, tail and length
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Instance method: push => add value to the end of the list
  // Create a new node with the value
  // if the current head & tail is null, set the node to be both head and tail
  // if there is head & tail, set the next property for current tail to be the new node
  // then set the tail to be the new node
  // increment the list length by one and return the list
  push(val) {
    const node = new Node(val);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Pop: remove the last node (tail) and return it (set the second last to be the new tail)
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    // currentHead.next = null;  // Not needed - garbage collector will collect it?
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get the node for a certain index
  get(index) {
    if (index < 0 || index > this.length) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // Set the value of the node for an index
  set(index, value) {
    const foundNode = this.get(index)
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  // Insert a value to a certain index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return this.push(value) && true; // or use !! coercion
    if (index === 0) return this.unshift(value) && true;

    const node = new Node(value);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = node;
    node.next = next;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const node = prev.next;
    prev.next = node.next;
    this.length--;
    return node;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let current = this.head;
    // Swap the head and tail
    this.head = this.tail;
    this.tail = current;
    // Variables to keep track of the node values
    let next;
    let prev = null; // Make sure the new tail has null as the next property
    for (let i = 0; i < this.length; i++) {
      // Keep track of the next value
      next = current.next;
      // Set the next property to point backward to prev
      current.next = prev;
      // Move forward to continue looping
      prev = current;
      current = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList()

// Testing push, pop, insert
// console.log(list);
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));
// console.log(list.push(4));
// console.log(list.push(5));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log('insert', list.insert(3, 4))
// console.log(list);

// Testing reverse
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.print();
// list.reverse();
// list.print();
