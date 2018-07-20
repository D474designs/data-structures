var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    counter: 0,
  };
  _.extend(instance, stackMethods);

  return instance;

};


  var stackMethods = {
  push: function(value){
    this.storage[this.counter++] = value;
  },
  pop: function(){
    if (this.counter > 0) {
      var removed = this.storage[--this.counter];
      delete this.storage[this.counter];
      return removed;
    }
  },
  size: function() {
      return this.counter;
  }
};

// // Simple stack implementation
// var Stack = function() {
//   //container for data
//   this.storage = []
//
//   //push method
//   this.stackPush = function(data) {
//     return this.storage.push(data);
//   };
//   //pop method
//   this.stackPop = function(){
//     return this.storage.pop();
//   };
//   //size method
//   this.stackSize = function(){
//         console.log(this.storage)
//     return this.storage.length;
//   }
// };
