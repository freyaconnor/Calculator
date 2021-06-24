const readline = require('readline-sync');
const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');
function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('==========================');
}
function getCalculationMode(){
    console.log('Which calculator mode do you want?\n\ 1)Arithmetic Mode\n\ 2)Vowl Counting Mode');
    const mode = readline.prompt();
    return mode.toLowerCase()
}
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage()
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
      arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
      vowelCounting.performOneVowelCountingCalculation();
    }
}
  


