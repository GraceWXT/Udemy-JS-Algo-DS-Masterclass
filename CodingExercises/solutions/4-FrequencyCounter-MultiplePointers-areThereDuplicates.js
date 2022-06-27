// Using Frequency Counter Pattern
function areThereDuplicates(...args) {
  let collection = {}
  for(let val in args){
    collection[args[val]] = (collection[args[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// Using Multiple Pointers Pattern
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// One Liner Solution
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}
