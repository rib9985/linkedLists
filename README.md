# Linked List
## A doubly linked list implementation in Javascript, using ES6 modules

## Methods
`append(data)` -> Add a new node containing the data to the end of the list.
`prepend(data)` -> Adds a new node containing the data to the start of the list.
`size()` -> returns the number of nodes in the list
`getHead()` -> returns the first node in the list (excluding the pointer to null)
`getTail()` -> returns the last node in the list (excluding the pointer to null)
`at(index)` -> returns the node in the list at the index, handling edge cases approatiately (i.e. out of bounds or negative)
`pop()` -> returns the last node in the list and returns it
`contains(data)` -> returns true or false if the list contains the desired data
`find(data)` -> returns the index of the node containing the value or null if not found
`toString()` -> returns a visual representation of the list as follows: `( data ) -> ( data ) -> ( data ) -> null`
`insertAt(data, index)` -> inserts a node at the desired position
`removeAt(index)` -> removes a node at the desired position


## Testing
 - Clone the repo
 - Run `node test.mjs`

## Usage
- To use the Linked List class, copy both the `linkedLists.mjs` and `node.mjs` to your desired directory
- For use in a Javascript file:
```js
import { LinkedList } from "./linkedLists.mjs";
const list = new LinkedList();
```

##### Created for The Odin Project
