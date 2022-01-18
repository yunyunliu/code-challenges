
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

  push(val) { // push = add to end
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
}

const list = new SinglyLinkedList(); // create empty list
list.push('hello')
list.push('there')
