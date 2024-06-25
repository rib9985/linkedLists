import { LinkedList } from "./linkedList.mjs";
const list = new LinkedList();
list.append("foo");
list.append("bar");
list.append("baz");

console.log(list);

list.prepend("baz-before");
list.prepend("bar-before");
list.prepend("foo-before");

console.log(list);

console.log(list.toString());
console.log(list.size());
console.log(list.at(0)); //foo-before
console.log(list.at(5)); //baz
console.log(list.getTail()); //baz
console.log(list.getHead()); //foo-before
console.log(list.pop()); //baz removed
console.log(list.toString()); // list without baz
console.log(list.contains("foo")); //true
console.log(list.contains("baz")); //false
//
console.log(list.find("foo")); //2
console.log(list.find("baz-before")); //3
console.log(list.find("whatever")); //null
list.insertAt("foo-at-index-4", 4); // changes the link accordingly
console.log(list.toString());
console.log(list);
list.insertAt("foo-at-index-6", 6); //should place foo at the last position, since 6 doesn't exist
console.log(list.toString());
console.log(list);
list.insertAt("foo-at-index-0", -1); //should place foo at the first position, since -1 doesn't exist
console.log(list.toString());
console.log(list);
list.removeAt(-1); //should remove foo-at-index-0 at index 0, since -1 doesn't exist
console.log(list.toString());

list.removeAt(3); //should remove element at index 3
console.log(list.toString());
console.log(list);
