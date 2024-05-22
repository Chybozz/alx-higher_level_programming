#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding the first two elements

console.log(`${args[0] || 'undefined'} is ${args[1] || 'undefined'}`);
