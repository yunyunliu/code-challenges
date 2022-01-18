
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// methods
  push(val) { // push = add node to end
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // previous tail points to new node
      this.tail = newNode // newly added node is the new tail
    }
    this.length++;
    return this;
  }

  pop() { // remove node from end of list and return removed node
    if (this.length === 0) {
      return;
    }
    let prev = this.head; // will become the new tail
    let current = prev.next;

    // traverse list until second-to-last node, set it's next property null, set this.tail to equal second-to-last node
    while(current.next) {
      prev = current;
      current = current.next
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() { // remove node from front of linked list, and return it
    if (!this.head) {
      return;
    }
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removed;
  }

  unshift(val) { // add new node to beginning of linked list
    const newNode = new Node(val);
    if (!list.head) { // if list is empty
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

const list = new SinglyLinkedList(); // create empty list
list.push('hello')
list.push('there')
list.push('you')
list.push('!')
list.unshift('there')
list.unshift('hey')

// console.log(list)


// console.log('expect 0:', list.length)
console.log(list)
