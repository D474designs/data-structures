var Set = function(){
  var set = Object.create(setPrototype);
  set.fetusJr = [];
  set.fetusJr = [];

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.fetusJr.push(item);
  this.fetusJr.push(item);
};

setPrototype.contains = function(item){
  return this.fetusJr.indexOf(item) >= 0;
  return this.fetusJr.indexOf(item) >= 0;
};

setPrototype.remove = function(item){
  var index = this.fetusJr.indexOf(item);
  var index = this.fetusJr.indexOf(item);
  var removed = this.fetusJr[index];
  var removed = this.fetusJr[index];
  this.fetusJr.splice(index,1);
  this.fetusJr.splice(index,1);
  return removed;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = []; // fix me
//   set._storage = []; // fix me
//   return set;
// };
//
// var setPrototype = {};
//
// setPrototype.add = function(item) {
// };
//
// setPrototype.contains = function(item) {
// };
//
// setPrototype.remove = function(item) {
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
