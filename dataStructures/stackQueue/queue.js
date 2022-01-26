// singly linked list implementation of queue

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
 // only 2 methods:
 enqueue(val) { // enqueue (add/push to end),
   const newNode = new Node(val);
   if (!this.first) { // if queue is empty
     this.first = newNode;
     this.last = newNode;
   } else {
     const wasLast= this.last;
     wasLast.next = newNode;
     this.last = newNode;
   }
   return ++this.size;
 }

 dequeue() { // dequeue (remove/shift from front) and return
  if (!this.first) return null; // check if queue is empty
  const removed = this.first;
  if (this.size === 1) {
    this.first = null;
    this.last = null;
  } else {
    this.first = this.first.next;
    removed.next = null;
  }
  this.size--;
  return removed;
 }

 print() {
   if (this.size == 0) {
     console.log('queue is empty');
     return;
   }
   console.log('remove from front');
   let current = this.first;
   let count = 0;
   while (count < this.size) {
     console.log(current.value);
     current = current.next;
     count++;
   }
   console.log('add to back')
 }

}

const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
// queue.print()
// console.log(queue.size)
console.log('expect "first":', queue.dequeue())
console.log('expect "second":', queue.dequeue())
console.log('expect "third":', queue.dequeue())
console.log('expect "null":', queue.dequeue())
queue.print()
