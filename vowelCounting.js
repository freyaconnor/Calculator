

const userInput = require('./userInput');

let vowels = {a:0, e:0, i:0, o:0, u:0};
function vowelcount(st, vowels){
    for (let letter of st) {
        if (vowels.hasOwnProperty(letter)) {
            vowels[letter]++;
        }
    }
    return console.log(vowels) 
}
exports.function performOneVowelCountingCalculation(){
    let st=enterstring();
    vowelcount(st, vowels);
}