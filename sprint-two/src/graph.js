
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];


} ;

// Add a node to the graph, passing in the node's value.

Graph.prototype.addNode = function(value) {
  var node = { edges: [], value: value};
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return _.some(this.nodes, function(node) {
    return node.value === target;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  var del = this.nodes.indexOf(_.find(this.nodes, function(node) {
      return node.value === target;
  }));
  if (del !== - 1) {
    this.nodes.splice(del, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node) {
    return node.value === toNodeValue;
  });
  return (origin.edges.indexOf(destination) >= 0) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  var origin = _.find(this.nodes, function(node) {
      return node.value === fromNodeValue;
    });
  var destination = _.find(this.nodes, function(node) {
      return node.value === toNodeValue;
    });
    origin.edges.push(destination);
    destination.edges.push(origin);

  };

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  var origin = _.find(this.nodes, function(node) {
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node) {
    return node.value === toNodeValue;
  });
  var dIndex = origin.edges.indexOf(destination);
  var oIndex = destination.edges.indexOf(origin);
  origin.edges.splice(dIndex,1);
  destination.edges.splice(oIndex,1);
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // // Instantiate a new graph
 // var Graph = function() {
 // };
 //
 // function addNodeFunc(node){
 //  this[node] = {
 //     value: node,
 //     edges: {}
 //   };
 // }
 // // Add a node to the graph, passing in the node's value.
 // Graph.prototype.addNode = addNodeFunc;
 // console.log(typeof Graph.prototype.addNode)
 // // Return a boolean value indicating if the value passed to contains is represented in the graph.
 // Graph.prototype.contains = function(node) {
 //   return this.hasOwnProperty(node);
 // };
 //
 // // Removes a node from the graph.
 // Graph.prototype.removeNode = function(node) {
 //   let nodes = this[node].edges;
 //   for (var key in nodes) {
 //     this.removeEdge(key, node);
 //   }
 //   delete this[node];
 // };
 //
 // // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
 // Graph.prototype.hasEdge = function(fromNode, toNode) {
 //   let thisNode = this[fromNode];
 //   let thatNode = this[toNode];
 //   let over = thisNode ? thisNode.edges.hasOwnProperty(toNode) : false;
 //   let back = thatNode ? thatNode.edges.hasOwnProperty(fromNode) : false;
 //   return (over && back) ? true : false;
 // };
 //
 // // Connects two nodes in a graph by adding an edge between them.
 // Graph.prototype.addEdge = function(fromNode, toNode) {
 //   this[fromNode].edges[toNode] = toNode;
 //   this[toNode].edges[fromNode] = fromNode;
 // };
 //
 // // Remove an edge between any two specified (by value) nodes.
 // Graph.prototype.removeEdge = function(fromNode, toNode) {
 //   delete this[fromNode].edges[toNode];
 //   delete this[toNode].edges[fromNode];
 // };
 //
 // // Pass in a callback which will be executed on each node of the graph.
 // Graph.prototype.forEachNode = function(cb) {
 //   for(var node in this){
 //     console.log('***************************');
 //     console.log('node:' + ' ' + node + ' ' + 'typeof:' + ' ' + typeof node);
 //     let type = typeof node;
 //     if(type !== 'function'){
 //       cb(node);
 //     }
 //   }
 // };

 /*
  * Complexity: What is the time complexity of the above functions?
  */

 // // Instantiate a new graph
 // var Graph = function() {
 // };
 //
 // // Add a node to the graph, passing in the node's value.
 // Graph.prototype.addNode = function(node) {
 //   this[node] = []
 // };
 //
 // // Return a boolean value indicating if the value passed to contains is represented in the graph.
 // Graph.prototype.contains = function(node) {
 //   return !!this[node];
 // };
 //
 // // Removes a node from the graph.
 // Graph.prototype.removeNode = function(node) {
 //   //iterate thru all nodes to delete any any containing edge
 //   for (var to in this) {
 //     to = parseInt(to)
 //     // if (this.hasEdge(node, to)) {
 //     //   this.removeEdge(node, to)
 //     // }
 //     this.hasEdge(node, to) && this.removeEdge(node, to)
 //   }
 //   delete this[node]
 // };
 //
 // // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
 // Graph.prototype.hasEdge = function(fromNode, toNode) {
 //   return this[fromNode].includes(toNode) && this[toNode].includes(fromNode)
 //
 // };
 //
 // // Connects two nodes in a graph by adding an edge between them.
 // Graph.prototype.addEdge = function(fromNode, toNode) {
 //   this[fromNode].push(toNode)
 //    fromNode === toNode ? null : this[toNode].push(fromNode)
 // };
 //
 // // Remove an edge between any two specified (by value) nodes.
 // Graph.prototype.removeEdge = function(fromNode, toNode) {
 //   this[fromNode].splice(this[fromNode].indexOf(toNode), 1)
 //   this[toNode].splice(this[toNode].indexOf(fromNode), 1)
 // };
 //
 // // Pass in a callback which will be executed on each node of the graph.
 // Graph.prototype.forEachNode = function(cb) {
 //   // const k = this
 //   for (var m in this){
 //   // console.log(m)
 //   m = parseInt(m)
 //   // console.log('')
 //   if (Array.isArray(this[m])){
 //     // console.log(Array.isArray(this[m]))
 //     console.log(this[m])
 //     cb(m)
 //   }
 //   }
 // };
 //
 // /*
 //  * Complexity: What is the time complexity of the above functions?
 //  */
 // let graph = new Graph();
 //     var connectToFive = function(item) {
 //       graph.addEdge(item, 5);
 //     };
 //
 //     // Instantiate a new graph
 //     var Graph = function() {
 //       this.nodes = {};
 //     };
 //     // Add a node to the graph, passing in the node's value.
 //     Graph.prototype.addNode = function(node) {
 //       //make value of node an empty object
 //       this.nodes[node] = {};
 //     };
 //
 //     // Return a boolean value indicating if the value passed to contains is represented in the graph.
 //     Graph.prototype.contains = function(node) {
 //       return !!this.nodes[node];
 //     };
 //
 //     // Removes a node from the graph.
 //     Graph.prototype.removeNode = function(node) {
 //       //iterate through all keys
 //       for (var key in this.nodes) {
 //         if (this.nodes[key][node]) {
 //           delete this.nodes[key][node];
 //         }
 //       }
 //       delete this.nodes[node];
 //     };
 //
 //     // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
 //     Graph.prototype.hasEdge = function(fromNode, toNode) {
 //       return !!this.nodes[fromNode][toNode];
 //     };
 //
 //     // Connects two nodes in a graph by adding an edge between them.
 //     Graph.prototype.addEdge = function(fromNode, toNode) {
 //       this.nodes[fromNode][toNode] = true;
 //       this.nodes[toNode][fromNode] = true;
 //
 //     };
 //
 //     // Remove an edge between any two specified (by value) nodes.
 //     Graph.prototype.removeEdge = function(fromNode, toNode) {
 //         delete this.nodes[fromNode][toNode];
 //         delete this.nodes[toNode][fromNode];
 //     };
 //
 //     // Pass in a callback which will be executed on each node of the graph.
 //     Graph.prototype.forEachNode = function(cb) {
 //       for (var key in this.nodes) {
 //         cb(key, this.nodes[key]);
 //       }
 //     };
 //
 //     var connectToFive = function(item) {
 //       graph.addEdge(item, 5);
 //     };
 //
 //     // var graph = new Graph();

// // Instantiate a new graph
// var Graph = function() {
// };
//
// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   this[node] = []
// };
//
// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   return !!this[node];
// };
//
// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   //iterate thru all nodes to delete any any containing edge
//   for (var to in this) {
//     to = parseInt(to)
//     // if (this.hasEdge(node, to)) {
//     //   this.removeEdge(node, to)
//     // }
//     this.hasEdge(node, to) && this.removeEdge(node, to)
//   }
//   delete this[node]
// };
//
// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   return this[fromNode].includes(toNode) && this[toNode].includes(fromNode)
//
// };
//
// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   this[fromNode].push(toNode)
//    fromNode === toNode ? null : this[toNode].push(fromNode)
// };
//
// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   this[fromNode].splice(this[fromNode].indexOf(toNode), 1)
//   this[toNode].splice(this[toNode].indexOf(fromNode), 1)
// };
//
// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   // const k = this
//   for (var m in this){
//   // console.log(m)
//   m = parseInt(m)
//   // console.log('')
//   if (Array.isArray(this[m])){
//     // console.log(Array.isArray(this[m]))
//     console.log(this[m])
//     cb(m)
//   }
//   }
// };
//
// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
// let graph = new Graph();
//     var connectToFive = function(item) {
//       graph.addEdge(item, 5);
//     };
