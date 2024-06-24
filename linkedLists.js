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
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNoad;
      this.tail = newNoad;
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
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
list.prepend(0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
console.log(list.size()); // 4
console.log(list.contains(2)); // true
console.log(list.find(3)); // 3
console.log(list.at(2).data); // 2
list.insertAt(1.5, 2);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> ( null )
list.removeAt(1);
console.log(list.toString()); // ( 0 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> ( null )
console.log(list.pop()); // 3
console.log(list.toString()); // ( 0 ) -> ( 1.5 ) -> ( 2 ) -> ( null )
