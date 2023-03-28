Array.prototype.myForeach = function (callback, thisArg) {
  if(typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  thisArg = thisArg || this
  const length = this.length
  for(let i = 0; i < length; i++) {
    callback.call(thisArg, this[i], i, this)
  }
}

const arr = [1, 2, 3, 4, 5]
const fn = (item) => item * 2

arr.myForeach((item) => {
  // fn(item)
  console.log(item * 2);
})
