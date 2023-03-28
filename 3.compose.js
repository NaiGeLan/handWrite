const add1 = (num) => {
  return num + 1;
};

const mul5 = (num) => {
  return num * 5;
};

const sub8 = (num) => {
  return num - 8;
};

// pipe方法中从左往右执行 把reduceRight改成reduce
const compose = (...args) => {
  return function(num){
    return args.reduceRight((res, cb) => cb(res), num)
  }
}

const composeFn = compose(add1, mul5, sub8);
console.log(composeFn(10)); 
