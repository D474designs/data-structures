var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // recurse right or left through children
  if (value < this.value) {
    if (this.left === null)  {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null)  {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (target === this.value) return true;
  // recurse right or left through children
  if (this.value > target && this.left) return this.left.contains(target);
  if (this.value < target && this.right) return this.right.contains(target);
  return false;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  // recurse right or left through children
  if (this.left) this.left.depthFirstLog(callback);
  if (this.right) this.right.depthFirstLog(callback);
};

// var BinarySearchTree = function(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// };
//
// BinarySearchTree.prototype.insert = function(value) {
//   // don't allow duplicate values in tree
//   if (value === this.value) {
//     return new Error("cannot insert a duplicate value into this binary search tree");
//   };
//
//   // if value to insert is less than root value, go left
//   if (value < this.value) {
//     if (this.left === null) {
//       this.left = new BinarySearchTree(value);
//     } else {
//       this.left.insert(value);
//     }
//   }
//
//   // if value to insert is greater than root value, go right
//   if (value > this.value) {
//     if (this.right === null) {
//       this.right = new BinarySearchTree(value);
//     } else {
//       this.right.insert(value);
//     }
//   }
// };
//
// BinarySearchTree.prototype.contains = function(targetValue) {
//   // base case: targetValue is found in tree
//   if (this.value === targetValue) {
//     return true;
//   }
//
//   // if root value is less than the target value and the right child isn't empty, go right
//   if (this.value < targetValue && this.right) {
//     return this.right.contains(targetValue);
//   }
//
//   // if root value is greater than the target value and the left child isn't empty, go left
//   if (this.value > targetValue && this.left) {
//     return this.left.contains(targetValue);
//   }
//
//   // targetValue not found in tree
//   return false;
// };

// var BinarySearchTree = function(value) {
//
// };


/*
 * Complexity: What is the time complexity of the above functions?
 log n time complexity, logarithmic time
 */

//  var BinarySearchTree = function (value) {
//   this.left;
//   this.right;
//   this.value = value;
// };
//
// BinarySearchTree.prototype.insert = function (value) {
//   var newNode = new BinarySearchTree(value);
//   var searchTree = function (node) {
//     if (!node.left && node.value > value) {
//       node.left = newNode;
//     } else if (!node.right && node.value < value) {
//       node.right = newNode;
//     } else if (node.left && node.value > value) {
//       searchTree(node.left);
//     } else if (node.right && node.value < value) {
//       searchTree(node.right);
//     }
//   };
//
//   searchTree(this);
// };
//
// BinarySearchTree.prototype.contains = function (value) {
//   var contains = false;
//   var searchTree = function (node) {
//     if (node.value === value) { contains = true; }
//     if (!contains && node.left) { searchTree(node.left); }
//     if (!contains && node.right) { searchTree(node.right); }
//   };
//
//   searchTree(this);
//   return contains;
// };
//
// BinarySearchTree.prototype.depthFirstLog = function (cb) {
//   var depthLog = function (node) {
//     cb(node);
//
//     if (node.left) { depthLog(node.left); }
//     if (node.right) { depthLog(node.right); }
//   };
//
//   depthLog(this);
// };
