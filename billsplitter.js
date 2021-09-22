const prompt = require('prompt-sync')();

const bill = prompt('How much was the bill? ');

const person1 = prompt('How much person 1 pay? ')

const person2 = prompt('How much person 2 pay? ')

const splitBill = bill / 2;

const owes1 = splitBill - person1;
const owes2 = splitBill - person2;

if (person1 === person2) {
    console.log('Then noone owes');
} else if (person1 < splitBill) {
    console.log('person 1 owes money', owes1);
} else if (person2 < splitBill) {
    console.log('person 2 owes money' , owes2);
} else {
    console.log('error');
}