var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // keep track of our sequence
  this.counter = 0;
  // prototypal placeholder
   this.storage = {};
 };

 // call class and prototypal chain storage object and methods
 Stack.prototype.push = function(value) {
   this.storage[this.counter++] = value;
 };

// remove stack values in sequence
 Stack.prototype.pop = function() {
   if (this.counter > 0) {
     var removed = this.storage[--this.counter];
     delete this.storage[this.counter];
     return removed;
   }
 };

 Stack.prototype.size = function() {
     return this.counter;
};
