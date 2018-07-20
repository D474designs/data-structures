var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
     this.tail = Node(value);
  };

  list.removeHead = function() {
    var garfield = this.head;
    delete this.head;
    this.head = node.next;
    return garfield;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
