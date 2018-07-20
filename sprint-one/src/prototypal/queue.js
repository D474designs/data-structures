var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create prototypal object when queue method is used
  var instance = Object.create(queueMethods);
   instance.storage = {};
   instance.counter = 0;
   return instance;
 };

// parameter object used to hold our methods
 var queueMethods = {
   enqueue: function(value) {
     this.storage[this.counter++] = value;
   },
   dequeue: function() {
     if (this.counter > 0) {
       var removed = this.storage[0];
       //iterate through keys and reassign numeric key values
       for (var i = 0; i < this.counter; i++) {
         this.storage[i] = this.storage[i+1];
       }
       delete this.storage[--this.counter];
       return removed;
     }
   },
   size: function(){
     return this.counter;
   }
};
