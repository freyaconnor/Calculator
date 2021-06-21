const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');
console.log('Please enter operator:');
const response3 = readline.prompt();
console.log('How many numbers do you want to enter?:');
const numb = readline.prompt();
var a = parseInt(numb);
let arr = Array(a);
b=0
for (let i = 0; i < arr.length; i++) {
    console.log('Please enter number ' + (i+1) +':');
    const response = readline.prompt();
    let b= parseInt(response);
    arr[i]=b
    
  }



let ans=0
switch (response3) {
    case '+':
        for (let i = 0; i < arr.length; i++) {
            ans+=arr[i]
        }

        
        break;
    case '-':
        ans=arr[0]
        for (let i = 0; i < (arr.length-1); i++) {
            ans-=arr[i+1]
        }
        
        break;
    case '*':
        ans=1
        for (let i = 0; i < arr.length; i++) {
            ans*=arr[i]
        }
        break;
    case '/':
        ans=arr[0]
        for (let i = 0; i < (arr.length-1); i++) {
            ans/=arr[i+1]
        }
        break;
}
console.log(ans);


