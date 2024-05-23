#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements
const size = parseInt(args[0], 10); // Parse the first argument as an integer

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
