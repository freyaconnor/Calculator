const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter some input:');
const response = readline.prompt();
console.log('Please enter another input:');
const response2 = readline.prompt();

var num1 = parseInt(response);
var num2 = parseInt(response2);
var addd = num1*num2;
console.log(addd);
