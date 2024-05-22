#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements

if (args[0] === undefined) {
  console.log('No argument');
} else {
  console.log(args[0]);
}
