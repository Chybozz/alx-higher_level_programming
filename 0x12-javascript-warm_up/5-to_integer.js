#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements
const number = parseInt(args[0], 10); // Parse the first argument as an integer

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
