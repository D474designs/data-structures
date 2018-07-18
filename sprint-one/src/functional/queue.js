var Queue = function() {
 var someInstance = {};

 // Use an object with numeric keys to store values
 var storage = {};
 var start = 1;
 var last = 1;
 // Implement the methods below

 someInstance.enqueue = function(value) {
    // storage[Object.keys(storage).length] = value;
    storage[start] = value;
    start++;
 };

 someInstance.dequeue = function() {
   // if (someInstance.size < 1) {
   //   return undefined;
   // }

   // last = Object.keys(storage).length - 1;

   var dequeued = storage[last];
   delete storage[last];
   last++;
   return dequeued;
 };

 someInstance.size = function() {
   // if(Object.keys(storage).length < 1){
   //   return 0;
   // }

   if (start - last < 0) {
     return 0;
   }
   return start - last;

    // return Object.keys(storage).length;

 };

 return someInstance;
};

// var Queue = function() {
//   var someInstance = {};
//
// // Use an object with numeric keys to store values
//   var storage = {};
//   var count = 0;
//
// // Implement the methods below
//
// someInstance.enqueue = function(value) {
//     storage[count]=value;
//     count ++;
//   };
//
// someInstance.dequeue = function() {
//     if ( count < 1 ){
//       return ;
//     }
//     var popedValue = storage[0];
//     delete storage[0];
//     for ( var i = 1 ; i < count ; i ++){
//       storage[i-1] = storage[i];
//     }
//     delete storage[count-1];
//     count --;
//     return popedValue;
//   };
//   someInstance.size = function() {
//     return count;
//   };
//   return someInstance;
// };

// var Queue = function() {
//   var someInstance = {};
//
//   // Use an object with numeric keys to store values
//   var storage = {};
//   var head = 0
//   var tail = 0
//
//   // Implement the methods below
//
//   someInstance.enqueue = function(value) {
//     storage[tail] = value;
//     tail+=1;
//   };
//
//   someInstance.dequeue = function() {
//   	var val = storage[head];
//     delete storage[head]
//     head+=1;
//     return val;
//   };
//
//   someInstance.size = function() {
//     return Object.keys(storage).length;
//   };
//
//   return someInstance;
// };
