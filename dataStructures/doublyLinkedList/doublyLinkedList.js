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
    if (!this.head) return; // if list is empty, cant't remove anything from it
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

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) { // access node of doubly linked list at given position; in doubly-linked list can start from head or tail depending on what position it given; is if looking for value near end of list, can tail and following previous pointers
    if (position < 0 || position >= this.length) return null;
    let current;
    let count;
    if (position <= this.length / 2) {
      current = this.head; // if position is in first half of the list, start traversing from head
      count = 0;
      while (count !== position) {
        count++;
        current = current.next;
      }
    } else {
      current = this.tail; // otherwise if position is closer to end of the list, start traversing backwards from tail
      count = this.length - 1; // position like an array's index
      while (count !== position) {
        count--;
        current = current.prev;
      }
    }
    return current;
  }

  set(position, val) { // update value of node in position with val
    const target = this.get(position);
    if (!target) return false; // check if a node exists at position
    // if it does exist, update its value
    target.value = val;
    return true;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) {
      this.unshift(val); // or return !!this.unshift(val) to coerce the tree that unshift returns into a boolean
    } else if (position === this.length) {
      this.push(val)
    } else {
      const nodeBefore = this.get(position - 1);
      const inserted = new Node(val);
      const nodeAfter = nodeBefore.next;
      nodeBefore.next = inserted;
      inserted.next = nodeAfter;
      inserted.prev = nodeBefore;
      nodeAfter.prev = inserted;
    }
    this.length++;
    return true;
  }

  remove(position) { // remove node at position and return it
    if (position < 0 || position >= this.length) return; // check for invalid index
    if (position === 0) return this.shift(); // edge cases
    if (position === this.length - 1) return this.pop();
    const removed = this.get(position);
    const before = removed.prev;
    const after = removed.next;
    before.next = after; // connect node before removed node to node after removed node
    after.prev = before; // and vice versa
    removed.next = null; // remove all references to other nodes from removed node before returning
    removed.prev = null;
    this.length--;
    return removed;
  }

  printValues() {
    let count = 0;
    let current = this.head;
    while (count < this.length) {
      console.log('value:', current.value, 'position:', count);
      current = current.next;
      count++;
    }
  }
}

const list = new DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');

// console.log(list);
// console.log(list.shift())
list.unshift('zero-th')
list.push('fourth');
list.push('fifth');
console.log('removed:', list.remove(list.length - 1))
// console.log(list.get(4))
list.printValues()
