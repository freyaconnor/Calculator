const readline = require('readline-sync');
function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('==========================');
}
function EnteraNumber(arr){
    b=0
    for (let i = 0; i < arr.length; i++) {
        console.log('Please enter number ' + (i+1) +':');
        const response = readline.prompt();
        
        let b= parseInt(response);
        if (isNaN(b)) {
            return console.log('Not a Number')
          } else {
            arr[i]=b;
          }
    }
 }
function Calculation(arr, response3){
    let ans=arr[0]
    switch (response3) {
        case '+':
            for (let i = 0; i < (arr.length-1); i++) {
                ans+=arr[i+1]
            }
            break;
        case '-':
            for (let i = 0; i < (arr.length-1); i++) {
                ans-=arr[i+1]
            }
        
            break;
        case '*':
            for (let i = 0; i < (arr.length-1); i++) {
                ans*=arr[i+1]
            }
            break;
        case '/':
            for (let i = 0; i < (arr.length-1); i++) {
                ans/=arr[i+1]
            }
            break;
    }
    console.log(ans);
}
    
function performOneCalculation(){
    var x=0
    while (x < 10) { 
        console.log('Please enter operator:');
        const response3 = readline.prompt();
        console.log('How many numbers do you want to enter?:');
        const numb = readline.prompt();
        var a = parseInt(numb);
        let arr = Array(a);
        EnteraNumber(arr); 
        Calculation(arr, response3);
        
     }
    
    
}
printWelcomeMessage()
performOneCalculation()
