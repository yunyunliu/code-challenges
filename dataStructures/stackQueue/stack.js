class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}



class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  // only needs 2 methods (push and pop) because that's all you need to implement first in, last out functionality
  // push and pop will be adding/removing from beginning of the singly linked list that represents the stack b/c adding/removing from front is O(1) for singly linked list
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const wasFirst = this.first;
      newNode.next = wasFirst;
      this.first = newNode;
    }
    this.size++;
    return this.size; // return new stack size
    // or return ++this.size;
  }

  pop() { // remove first element and return it
    if (this.size === 0) return null;
    const removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
      removed.next = null;
    }
    this.size--;
    return removed;
  }

  print() {
    console.log('most recent entry')
    let current = this.first;
    let count = 0;
    while (count < this.size) {
      console.log(current.value);
      current = current.next;
      count++;
    }
    console.log('earliest entry')
  }
}

const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');

stack.print()
console.log(stack.pop())
console.log(stack.size)
stack.print()
