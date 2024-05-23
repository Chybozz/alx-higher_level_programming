#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements
const x = parseInt(args[0], 10); // Parse the first argument as an integer

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
