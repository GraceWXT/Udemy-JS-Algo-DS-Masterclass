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
    // this.head = currentHead.next; // Not needed - garbage collector will collect it
    this.length--;
    currentHead.next = null;
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
}

// const list = new SinglyLinkedList()
// console.log(list);
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);
