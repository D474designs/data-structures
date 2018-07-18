var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;

    // storage[Object.keys(storage).length + 1] = value;
    // return storage;

  };

  someInstance.pop = function() {
    var popVal = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return popVal;

    // var popVal = storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    // delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];

  };

  someInstance.size = function() {
    return Object.keys(storage).length;

    // if (Object.keys(storage).length === 0) {
    //   return 0;
    // } else {
    //     return Object.keys(storage).length - 1;
    //   }

  };

  return someInstance;
};
