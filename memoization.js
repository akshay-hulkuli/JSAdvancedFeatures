// a simple function to add something
const getHash = (n) => (n % 73);
console.log("the normal method=> \nhashed value:",getHash(278));
// a simple memoized function to add something
const memoizedHash = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating Hash');
      let result = n % 73;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedHash
const newGetHash = memoizedHash();
console.log("memoized method =>")
console.log("hashed value:",newGetHash(1947)); // calculated
console.log("hashed value:",newGetHash(1947)); // cached
