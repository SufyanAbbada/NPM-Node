//Now lets import our data from the folder from the node-modules section. So
const { add, minus } = require("./node_modules/first-test-npm-package/index");
console.clear();
console.log(add(2, 4));
console.log(minus(2, 4));

//Checking And Testing Underscore Package

const _ = require("./node_modules/underscore");

const res = _.contains([1, 5, 7, 9], 9); //It is a simple function of Underscore that checks that whether the given number is in Array or not
console.log(res);
