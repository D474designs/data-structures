var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};
treeMethods.contains = function(target){
  if (this.value === target) return true;
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};

// var Tree = function(value) {
//   var newTree = {};
//   Object.assign(newTree,treeMethods)
//   newTree.value = value;
//   // your code here
//   newTree.children =  [];  //null;  // fix me
//
//   return newTree;
// };
//
// var treeMethods = {};
//
// treeMethods.addChild = function(value) {
//   // if()
// 	this.children.push(Tree(value))
// };
//
// treeMethods.contains = function(target) {
//     // console.log(this)
//     var arr = this;
//     var result = false;
//     // console.log(arr[0].value)
//     function traverse(arr) {
//       if (arr.value === target) {
//          result = true;
//       } else {
//         for (var i = 0;i < arr.children.length; i++) {
//          traverse(arr.children[i]);
//         }
//       }
//       // return false
//     }
//
//     traverse(arr);
//     return result;
//  };

/*
 * Complexity: What is the time complexity of the above functions?
 addChild is constant timeout
 contains is constant for the if statement, and linear for the else statement
 */

//   var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;
//
//   // your code here
//   newTree.children = [];  // fix me
//   _extend(newTree, treeMethods);
//   return newTree;
// };
//
// var treeMethods = {};
//
// treeMethods.addChild = function(value) {
//   this.children.push(Tree(value));
// };
//
// treeMethods.contains = function(target) {
//   var truthy = false;
//   var branchTest = function(branch) {
//     if (branch.value === target) {
//       truthy = true;
//     }
//     for (var i = 0; i < branch.children.length; i++) {
//       branchTest(branch.children[i]);
//     }
//   };
//   branchTest(this);
//   return truthy;
// };

// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;
//
//   // your code here
//   newTree.children = null;  // fix me
//
//   return newTree;
// };
//
// var treeMethods = {};
//
// treeMethods.addChild = function(value) {
// };
//
// treeMethods.contains = function(target) {
// };
