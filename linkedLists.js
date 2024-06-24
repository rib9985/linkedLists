class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data, null, this.head);
    if ((this.head = !null)) {
      node.index = this.head.index + 1;
    } else {
      node.index = 0;
    }
    this.head = node;
  }

  prepend(data) {
    const node = new Node(data, this.tail, null);
    this.tail = this.head;
    this.head = node;
  }

  size() {
    let size = 0;
    let nodeToCheck = this.head;
    while (nodeToCheck.nextNode !== null) {
      nodeToCheck = nodeToCheck.nextNode;
      size++;
    }
    return size;
  }

  at(index) {
    let nodeToCheck = this.head;
    while (nodeToCheck.index !== index) {
      nodeToCheck = nodeToCheck.nextNode;
    }
    return nodeToCheck;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  pop() {
    this.tail = tail().previousNode;
    this.tail.nextNode = null;
  }

  contains(data) {
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      if (nodeToCheck.data == data) {
        return true;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return false;
  }

  find(data) {
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      if (nodeToCheck.data == data) {
        return nodeToCheck.index;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return index;
  }

  toString() {
    let initialString = "";
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      initialString + `( ${nodeToCheck.value} ) ->`;
      nodeToCheck = nodeToCheck.nextNode;
    }
    return initialString + "( null )";
  }
}

class Node {
  constructor(data, nextNode, previousNode) {
    this.data = null;
    this.nextNode = null;
    this.previousNode = null;
    this.index = null;
  }

  index() {
    this.index = this.previousNode.index++;
  }
}
