class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { // add node to end of doubly linked list
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const wasTail = this.tail;
      wasTail.next = newNode;
      newNode.prev = wasTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() { // remove last node list and return it;
    if (this.length === 0) return;
    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = removed.prev; // second-to-last node
      newTail.next = null; // tail shouldn't point to anything in next property
      this.tail =  newTail;
      removed.prev = null; // returned node should not reference any node in prev property; because otherwise you could use removed.prev to access the rest of the list
    }
    this.length--;
    return removed
  }

  shift() { // remove node at beginning of doubly linked list and return it
    if (!this.head) return; // of list is empty, cant't remove anything from it
    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = removed.next;
      removed.next = null; // break connection in both directions
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
    return removed;
  }
}

const list = new DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');

console.log(list);
