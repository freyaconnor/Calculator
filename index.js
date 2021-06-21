const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');
console.log('Please enter operator:');
const response3 = readline.prompt();
console.log('Please enter first number:');
const response = readline.prompt();
console.log('Please enter second number:');
const response2 = readline.prompt();


var num1 = parseInt(response);
var num2 = parseInt(response2);
switch (response3) {
    case '+':
        var addd = num1+num2
        console.log(addd);
        break;
    case '-':
        var minus = num1-num2
        console.log(minus);
        break;
    case '*':
        var muli = num1*num2
        console.log(muli);
        break;
    case '/':
        var div=num1/num2
        console.log(div);
        break;
}


