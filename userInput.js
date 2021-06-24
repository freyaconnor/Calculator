const readline = require('readline-sync');
function enterstring(){
    console.log('please enter a string:'); 
    const mode = readline.prompt();
    return mode;  
}
exports.enterstring = enterstring;


