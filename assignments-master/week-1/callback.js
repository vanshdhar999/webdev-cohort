// what are callback functions?

function findSomething(x, fn) {

  // taylor expansion of e^x

  let sum = 0;

  for (let i = 0; i <= x; i++) {

    sum += (x ** i) / (fn(i))
  }
  return sum;

}
expansion = findSomething(3, function(s) { // factorial implementation})
