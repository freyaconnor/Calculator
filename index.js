const readline = require('readline-sync');
function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('==========================');
}
function EnteraNumber(arr){
    b=0
    for (let i = 0; i < arr.length; i++) {
        console.log('Please enter number' + (i+1) +' :');
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
    console.log('The answer is '+ (ans));
}
    
function performOneArithmeticCalculation(){
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
function enterstring(){
    console.log('please enter a string:'); 
    const mode = readline.prompt();
    return mode  
}
let vowels = {a:0, e:0, i:0, o:0, u:0};
function vowelcount(st, vowels){
    for (let letter of st) {
        if (vowels.hasOwnProperty(letter)) {
            vowels[letter]++;
        }
    }
    return console.log(vowels) 
}
function performOneVowelCountingCalculation(){
    let st=enterstring();
    vowelcount(st, vowels)
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
      performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
      performOneVowelCountingCalculation();
    }
}
  


