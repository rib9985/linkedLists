export class Node {
  constructor(data, nextNode, previousNode) {
    this.data = data || null;
    this.nextNode = nextNode || null;
    this.previousNode = nextNode || null;
    this.index = 0;
  }
}
