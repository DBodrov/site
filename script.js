// function * iter() {
//   let count = 0;
//   for(let i = 0; i < 2; i++) {
//     count++;
//     yield i;
//   }
//   return count
// }

// let iterator = iter();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

function sum(...args) {
  let count = args.reduce((acc, c) => acc + c, 0);
  const fn = b => {
    count = count + b;
    return fn
  }
  fn.toString = () => count
  // console.log(...args)
  return fn
}

console.log(sum(1)(2)(3)(4).toString())
