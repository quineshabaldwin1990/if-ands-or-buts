const pinCode = 2222;

const prompt = require('prompt-sync')();

const number1 = Number(prompt('Enter correct passcode'))

if (number1 === pinCode) {
    console.log("success");
}
else {
    console.log('failure');
}