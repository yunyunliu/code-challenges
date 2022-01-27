class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(val) { // finds node with value val and returns it or returns false;
    if (!this.root) return;
    if (this.root.value === val) return this.root;
    let current = this.root;
    while(true) {
      if (val === current.value) return current;
      if (val < current.value) {
        if (!current.left) return false;
        current = current.left;
      } else {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) { // if tree is empty, then inserted value is automatically the root
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) { // no exist condition, just keep looping
      if (val === current.value) return; // ignores duplicates; can also add frequency property to each node to track number of times that value has been added
      if (val < current.value) {
        if (!current.left) { // exit condition
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) { // exit condition
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  insertHelper(startNode, val) {
    const newNode = new Node(val);
    if (!startNode) {
      if (startNode === this.root) {
        this.root = newNode;
      }
      return this;
    }
    if (val === startNode.value) return;
    if (val < startNode.value) {
      if (!startNode.left) {
        startNode.left = newNode;
        return this;
      }
      return this.insertHelper(startNode.left, val);
    } else {
      if (!startNode.right) {
        startNode.right = newNode;
        return this;
      }
      return this.insertHelper(startNode.right, val);
    }
  }

  insertRecursive(val) {
    return this.insertHelper(this.root, val);
  }
}

const bst = new BinarySearchTree();
bst.insertRecursive(10)
bst.insertRecursive(5)
bst.insertRecursive(2)
bst.insertRecursive(7)
bst.insertRecursive(13)
bst.insertRecursive(6)
bst.insertRecursive(16)
console.log(bst.find(13))
