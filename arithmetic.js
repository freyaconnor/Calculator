
const userInput = require('./userInput');
const readline = require('readline-sync');

function EnterOP(){
    console.log('Please enter operator:');
    const response3 = readline.prompt();

    return response3
}

function EnterNub(){
    console.log('How many numbers do you want to enter?:');
    const numb = readline.prompt();
    var a = parseInt(numb);
    let arr = Array(a);
    return arr
}



function Calculation(operator, numbers) {
    if (operator === '+') {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else if (operator === '-') {
        return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
    } else if (operator === '*') {
        return numbers.reduce((acc, curr) => acc * curr, 1);
    } else if (operator === '/') {
        return numbers.slice(1).filter(x => x !== 0).reduce((acc, curr) => acc / curr, numbers[0]);
    }else { 
        throw new Error('invalid operator');
    }
}
function EnteraNumber(arr) {
    b=0;
    for (let i = 0; i < arr.length; i++) {
        console.log('Please enter number' + (i+1) +' :');
        const response = readline.prompt();
        
        let b= parseInt(response);
        if (isNaN(b)) {
            return console.log('Not a Number');
          } else {
            arr[i]=b;
          }
    
    }
    return arr;
 }

    
exports.performOneArithmeticCalculation = function() {
    const response3=EnterOP();
    let ar=EnterNub()
    let arr =EnteraNumber(ar); 
    
    try{
        const answer=Calculation(response3,arr);
        console.log(`\nThe answer is ${answer}`);
    }
    catch(e){
        console.log(`\n${e.message}`);

    }
    
}