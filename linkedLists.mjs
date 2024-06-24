import { Node } from "./node.mjs";
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      newNode.previousNode = this.tail;
      newNode.index = this.tail.index + 1;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.index = this.head.index - 1;
      newNode.nextNode = this.head;
      this.head.previousNode = newNode;
      this.newNode = newNode;
    }
  }

  size() {
    let size = 0;
    let nodeToCheck = this.head;
    while (nodeToCheck.nextNode !== null) {
      size++;
      nodeToCheck = nodeToCheck.nextNode;
    }
    return size;
  }

  at(index) {
    let nodeToCheck = this.head;
    while (nodeToCheck.index !== index && nodeToCheck.index != null) {
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
    if (this.tail === null) {
      return;
    }

    const poppedNode = this.tail;
    this.tail = poppedNode.previousNode;
    if (this.tail !== null) {
      this.tail.nextNode = null;
    } else {
      this.head = null;
    }
    return poppedNode.data;
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
    return;
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
    if (!nextNode) {
      return;
    }
    const prevNode = nextNode.previousNode;
    const newNode = new Node(data, nextNode, prevNode);
    newNode.index = index;
    if (prevNode) {
      prevNode.nextNode = newNode;
    } else {
      this.head = newNode;
    }
    nextNode.previousNode = newNode;
    let nodeToUpdate = nextNode;
    while (nodeToUpdate) {
      nodeToUpdate.index += 1;
      nodeToUpdate = nodeToUpdate.nextNode;
    }
  }

  removeAt(index) {
    const removedNode = this.at(index);
    if (!removedNode) return;

    const prevNode = removedNode.previousNode;
    const nextNode = removedNode.nextNode;

    if (prevNode) {
      prevNode.nextNode = nextNode;
    } else {
      this.head = nextNode;
    }

    if (nextNode) {
      nextNode.previousNode = prevNode;
      let nodeToUpdate = nextNode;
      while (nodeToUpdate) {
        nodeToUpdate.index -= 1;
        nodeToUpdate = nodeToUpdate.nextNode;
      }
    } else {
      this.tail = prevNode;
    }
  }
}

const list = new LinkedList();
list.append("foo");
list.append("bar");
list.append("baz");
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
console.log(list); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
