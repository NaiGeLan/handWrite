Array.prototype.myMap = function (callback, thisArg) {
  if(!callback || typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  thisArg = thisArg || this
  const length = thisArg.length
  const result = []
  for(let i = 0; i < length; i++) {
    result.push(callback.call(thisArg, thisArg[i], i, thisArg))
  }
  return result
}



const arr = [1, 2, 3, 4, 5]
const fn = (item) => item * 2

const result = arr.myMap((item) => item * 2)

console.log(result);
