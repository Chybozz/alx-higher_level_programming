#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements
const a = parseInt(args[0], 10); // Parse the first argument as an integer
const b = parseInt(args[1], 10); // Parse the second argument as an integer

function add (a, b) {
  return a + b;
}

if (isNaN(a) || isNaN(b)) {
  console.log('NaN');
} else {
  console.log(add(a, b));
}
