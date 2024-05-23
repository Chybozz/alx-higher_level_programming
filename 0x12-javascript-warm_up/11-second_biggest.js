#!/usr/bin/node

const args = process.argv.slice(2).map(Number); // Get arguments passed to the script and convert them to numbers

if (args.length <= 1) {
  console.log(0);
} else {
  args.sort((a, b) => b - a); // Sort the array in descending order
  console.log(args[1]); // Print the second biggest integer
}
