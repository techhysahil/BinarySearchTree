# BST : BinarySearchTree
**BST.js** is a Javascript library for Binary Search Tree. A simple binary search tree data structure implementation in Javascript. This implementation does not allow duplicate values to be inserted into the tree, ensuring that there is just one instance of each value.

**Live BST Visualizer : <a href="http://techhysahil.com/Projects/BSTVisual/BST-Dashboard.html" target="_blank">Click Here</a>

## Installing

#### Using NPM:

`npm install Binary-search-tree`

#### Using Bower:

`bower install Binary-search-tree`

## Getting Started

BST js contains the following functions: 
* add 
* contains
* minValue
* removeTree
* traversalTree
* size
* toArray
* toString
* maxDepth
* remove etc. 

Let's see how it's actually works:

#### JavaScript (Client Side):
```javascript
var binarySearchTree = new BST();	//initlize binary tree
```
#### Node JS (Server Side):
```javascript
var bst = require('./BST.js');
var binarySearchTree = new bst.BST()	//initlize binary tree
``` 

### Function Usage

```javascript
//Adding a node 
binarySearchTree.add(23);
binarySearchTree.add(89);

//search an element
binarySearchTree.contains(89);

//Remove an element
binarySearchTree.remove(89);

//Traversing an binary search tree
binarySearchTree.traversalTree({type:'inorder'},callback); //For inorder traversal
binarySearchTree.traversalTree({type:'preorder'},callback); //For preorder traversal
binarySearchTree.traversalTree({type:'postorder'},callback); //For postorder traversal

//maximum depth of Binary search tree
binarySearchTree.maxDepth();

//Return binary search tree elements in array
binarySearchTree.toArray();

//Return binary search tree elements in string form
binarySearchTree.toString();
```

## Authors

* **Sahil Gupta** - [Techhysahil](https://github.com/techhysahil)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/techhysahil/BinarySearchTree/blob/master/LICENCE.md) file for details

## Acknowledgments

* Inspiration
* Nicholas C. Zakas (https://github.com/nzakas)






