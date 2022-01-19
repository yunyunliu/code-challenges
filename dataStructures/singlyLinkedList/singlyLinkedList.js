
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

  get(position) { // given a position (head is position 0), traverse list position number of times, return node at that position
    if (position < 0 || position >= this.length) { // check for invalid positions
      return null;
    }
    let currentNode = this.head;
    let count = 0;
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  set(position, val) { // change value of the node at position to value
    const targetNode = this.get(position);
    if (targetNode) { // if the position is valid
      targetNode.value = val;
      return true;
    }
    return false;
  }
  insert(position, val) { // similar to set, but instead of updating existing node, creates new node and puts it in the list at position
    if (position < 0 || position > this.length) { // check that position is valid
      return false;
    }
    if (position === this.length) { // if inserting node and beginning or end of list, use unshift or push method
      return !!this.push(val); // ! (not) coerces its operand to a boolean, we want type coercion but not the negation, so use double negation !!
    }
    if (position === 0) {
      return !!this.unshift(val);
    }
    // position is somewhere in middle of list
    const newNode = new Node(val);
    const prev = this.get(position - 1);  // traverse list to find the node before position and then change its next property to point at the newly created node,
    const next = prev.next; // node that used to be at position
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }
  remove(position) { // remove node from specified position

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

console.log('entire list:', list)
console.log('length:', list.length)
list.set(2, 'yunyun')
console.log('expect value "false"', list.set(10, 'yunyun'));
