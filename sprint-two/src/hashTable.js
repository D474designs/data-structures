// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };
//
// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var buckets = this._storage[index];
//   if (!buckets) {
//     buckets = new LinkedList();
//     this._storage[index] = buckets;
//   }
//   if (!this.retrieve(k)) {
//     buckets.addToTail([k, v]);
//   }
// };
//
// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage[index].head;
//   while (bucket.value[0] !== k) {
//     bucket = bucket.next;
//   }
//   return bucket.value[1];
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
// };
//
//
//
// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;
//
//   list.addToTail = function(value) {
//     var node = new Node(value);
//     var currentNode = this.head;
//     if (!currentNode) {
//       this.head = node;
//       this.tail = node;
//     }
//     this.tail.next = node;
//     this.tail = node;
//     return node;
//   };
//
//   list.removeHead = function() {
//     if (this.head) {
//       var currentNode = this.head;
//       this.head = currentNode.next;
//
//       return currentNode.value;
//     }
//   };
//
//   list.contains = function(target) {
//     var currentNode = this.head;
//     while (currentNode) {
//       if (currentNode.value === target) {
//         return true;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//     return false;
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

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // set _limit to size of input array

  // if (this._storage.length > this._limit) {
  //   this._limit = this._limit * 2;
  // }
  // else if (this._storage.length < this._limit) {
  //   this._limit = this._limit / 2;
  // }

  // this._limit = index.length;
  // this._limit = LimitedArray.prototype.storage.length;
  // this._limit = k.length; // this won't work because k is the key
  // this._limit = this.storage[index].length;

  var index = getIndexBelowMaxForKey(k, this._limit);

  //check if this._storage[index] exists
  if (!this._storage[index]) {
    //if it doesn't, set it's value to an array
    this._storage[index] = [];
    //push an array of the key and value to the array
    this._storage[index].push([k, v]);
    return this._storage[index];
  } else {
    //iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      //if the key is stored at 0 index
      if (this._storage[index][i][0] === k) {
        //assign the value to be stored at 1 index
        this._storage[index][i][1] = v;
        //else push an array of the key and value to the array
      } else {
        this._storage[index].push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  //set a variable to for result
  var result = undefined;
  //we need to return the value of k if it exists at this._storage[index]
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if this._storage[index] exists
  if (!this._storage[index]) {
    //if it doesn't, return an error
    result = 'Error: not found';
  } else {
    //iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      //if k exists at 0 index, return the value at the 1 index
      if (this._storage[index][i][0] === k) {
        result = this._storage[index][i][1];
      }
    }
  }
  //return result
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through this._storage[index]
  for (var i = 0; i < this._storage[index].length; i++) {
    //if k exists at 0 index, remove the entire array from this._storage[index]
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //=> {var storage = [], get: f(x), set: f(x), each: f(x)}
};

HashTable.prototype.insert = function(k, v) {
  var tuple, index = getIndexBelowMaxForKey(k, this._limit);
  //check if a bucket exists at 'index'
  //if none exists
  if (!this._storage.get(index)) { //if bucket length is 0
    //create a bucket/array
    var newBucket = [];
    //push another array containing first element as k and the second as v into bucket
    tuple = [k,v];
    newBucket.push(tuple);
    //call set with this new array as the value
    this._storage.set(index, newBucket);
  } else { //if a bucket does exist at 'index'/else
    //use get to obtain bucket that exists at 'index' and assign it to variable
    var bucket = this._storage.get(index);
    if (bucket.length > 0) {
      var found = false;
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === k) {
          found = true;
          bucket[i][1] = v;
        }
      }
      if (!found) {
        tuple = [k,v];
        bucket.push(tuple);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length === 1) {
    if (bucket[0][0] === k) {
      return bucket[0][1];
    }
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var origVal, bucket = this._storage.get(index);
  if (bucket.length === 1) {
    if (bucket[0][0] === k) {
      origVal = bucket[0][1];
      bucket[0][1] = undefined;
      return origVal;
    }
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        origVal = bucket[i][1];
        bucket[i][1] = undefined;
        return origVal;
      }
    }
  }
};

// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };
//
// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   console.log(index);
//   console.log(k);
//   var bucket = this._storage[index];
//   if (bucket) {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         bucket[i][1] = v;
//       }
//
//       else {
//       this._storage[index].push([k, v]);
//       }
//     }
//   }
//
//   else {
//     this._storage[index] = [];
//     this._storage[index].push([k, v]);
//   }
//   // var getVal = this._storage.get(index);
//   // while(getVal !== undefined && k !== ){
//   //   this.prototype.rehashup;
//   //   var index = getIndexBelowMaxForKey(k, this._limit);
//   // }
// };
//
// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage[index];
//   if (bucket) {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         return bucket[i][1];
//       }
//     }
//   }
//   return undefined;
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage[index];
//   if (bucket) {
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         bucket.splice(i, 1);
//       }
//     }
//   }
// };

// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };
//
// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
// };
//
// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
