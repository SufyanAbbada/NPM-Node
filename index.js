const funcs = require("./calculator/index.js");
console.clear();
console.log(funcs.add(2, 3));
console.log(funcs.minus(8, 2));
//Or we can also use by Object Destructuring.
console.log("Other Way");
const { add, minus } = funcs;

console.log(add(1, 9));
console.log(minus(4, 1));

//We can also do In-place Object Destructuring by simply placing the below line at top
//const {add,minus} = require("./calculator")
//And this will simply go to the calculator and in there to the index file and then it will destructure these variables from there.
