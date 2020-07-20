const sum = require("./summing");
const diff = require("./negation");

const funcs = { add: sum, minus: diff };
//Either we can use
//const funcs = {sum,diff};
//And this is better because the variable name and the function name is same, so we can write simply by there names.

//Now in order to pass the both functions from the same file, we will now pass this object and can access the
//Functions by dot operator or by object destructuring.

module.exports = funcs;
