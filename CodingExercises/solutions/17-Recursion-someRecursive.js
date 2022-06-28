function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true; // no need to continue checking when a true is found
  return someRecursive(array.slice(1),callback);
}
