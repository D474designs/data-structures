/*
 * Complexity: What is the time complexity of the above functions?

 addToTail is constant time
 removeHead is constant time
 contains is linear time

 */

 var LinkedList = function() {
   var list = {};
   list.head = null;
   list.tail = null;

   list.addToTail = function(value) {

     var node = new Node(value);
     if (this.head === null) {
       this.head = node;
       this.tail = node;
     } else {
       this.tail.next = node;
       this.tail = node;
     }

   };

   list.removeHead = function() {
     var babyWalrus = this.head.value;
     this.head = this.head.next;
     return babyWalrus;

   };

   list.contains = function(target) {
     var currentHead = this.head;
     while (currentHead) {
       if (target === currentHead.value) {
         return true;
       } else {
         currentHead = currentHead.next;
       }
     }
     return false;

   };

   return list;

 };

 var Node = function(value) {
   var node = {};

   node.value = value;
   node.next = null;

   return node;
   
 };

 // var LinkedList = function() {
 //   var list = {};
 //   list.head = null;
 //   list.tail = null;
 //
 //   list.addToTail = function(value) {
 //
 //      // this.tail = Node(value);
 //
 //   };
 //
 //   list.removeHead = function() {
 //
 //     // if (!this.head) {
 //     //   return null;
 //     // }
 //     // let value = this.head.value;
 //
 //   };
 //
 //   list.contains = function(target) {
 //   };
 //
 //   return list;
 // };
 //
 // var Node = function(value) {
 //   var node = {};
 //
 //   node.value = value;
 //   node.next = null;
 //
 //   return node;
 // };
