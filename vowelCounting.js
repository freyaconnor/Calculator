

const userInput = require('./userInput');

let vowels = {a:0, e:0, i:0, o:0, u:0};
function vowelcount(st, vowels){
    for (let letter of st) {
        if (vowels.hasOwnProperty(letter)) {
            vowels[letter]++;
        }
    }
    return vowels
}
exports.performOneVowelCountingCalculation=function() {
    const st=userInput.enterstring();
    const answer= vowelcount(st, vowels);
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }

}