class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNoad;
      this.tail = newNoad;
    } else {
      newNode.index = this.tail.index + 1;
      newNode.previousNode = this.tail;
      this.tail = newNode;
    }
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

  insertAt(data, index) {
    const nextNode = this.at(index);
    const prevNode = nextNode.previousNode;
    const newNode = new Node(data, null, null, index);
    if (prevNode) {
      newNode.previousNode = prevNode;
      prevNode.nextNode = newNode;
    }
    if (nextNode) {
      nextNode.index += 1;
      nextNode.previousNode = newNode;
      let indexToUpdate = nextNode.nextNode;
      while (indexToUpdate) {
        indexToUpdate += 1;
        indexToUpdate = indexToUpdate.nextNode;
      }
    }
  }

  removeAt(index) {
    const removedNode = this.at(index);
    const prevNode = removedNode.previousNode;
    const nextNode = removedNode.nextNode;
    if (prevNode) {
      prevNode.nextNode = nextNode;
    }
    if (nextNode) {
      nextNode.index -= 1;
      nextNode.previousNode = prevNode;
      let indexToUpdate = nextNode.nextNode;
      while (indexToUpdate) {
        indexToUpdate -= 1;
        indexToUpdate = indexToUpdate.nextNode;
      }
    }
  }
}

class Node {
  constructor(data, nextNode = null, previousNode = null) {
    this.data = null;
    this.nextNode = nextNode;
    this.previousNode = nextNode;
    this.index = 0;
  }

  index() {
    this.index = this.previousNode.index++;
  }
}
