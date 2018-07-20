var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
    this.storage = {};
  };

  // use counter to maintain a numeric key sequence
  Queue.prototype.enqueue = function(value) {
    this.storage[this.counter++] = value;
  };

  // use counter to dequeue keys in sequence
  Queue.prototype.dequeue = function() {
    if (this.counter > 0) {
      var removed = this.storage[0];

      // reassigns numeric keys to maintain output sequence
      for (var i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i+1];
      }

      // keep counter from negative integers and reset numeric key
      delete this.storage[--this.counter];
      return removed;
    }
  };
  
  // return current queue size
  Queue.prototype.size = function(){
    return this.counter;
};
