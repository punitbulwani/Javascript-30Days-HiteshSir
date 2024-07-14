// Day - 2 : Operators
// Task/Activities


//Activity 1 - Arithmetic Operators

//Task - 1
// Write a program to add two numbers and log the result to the console.
//Task - 2
// write a program to subtract two numbers and the log result to the console.
//Task - 3
// Write a program to multiply two numbers and log the result to the console.
//Task - 4
// Write a program to divide two numbers and log the result to the console.
//Task - 5
// write a program to find the remainder when one number is divided by another and log the result to the console.

console.log('Activity 1');
let num1 = 100;
let num2 = 15;
let totalNum = num1 + num2; //addition
let subNum = num1 - num2; 
let multiNum = num1 * num2;
let divideNum = num1/num2;
let remainNum = num1%num2;

console.log(`total value of ${num1} and ${num2} is : ${totalNum}`);
console.log(`subtract value of ${num2} from ${num1} is : ${subNum}`);
console.log(`multiply of ${num1} and ${num2} is : ${multiNum}`);
console.log(`divide of ${num1} and ${num2} is : ${divideNum}`);
console.log(`reminder of ${num1} and ${num2} is: ${remainNum}`);

console.log('\n') 

//Activity 2 - Assignment Operators
//Task - 6
// Use the += operator to add a number to a variable and log the result to the console.
// use the -= operator to subtract a number to a variable and log the result to the console.
console.log('Activity 2');

let scorePlayer1 = 75;
let scorePlayer2 = 80;
let matchScore = 0;
matchScore += (scorePlayer1 + scorePlayer2)
scorePlayer1 -= (matchScore - scorePlayer2);
console.log (`match Score ${matchScore}`);
console.log(`scorePlayer1 : ${scorePlayer1}`);
console.log('\n');

//Activity 3 - Comparison Operators
//Task - 8
// Write a Program to compare two numbers using > and < and log the result to the console.
console.log('Activity 3');
const marksChemistry = 89;
const marksMaths = 85;
console.log(marksChemistry < marksMaths); //false
console.log(marksChemistry > marksMaths); //true


//Task 9
const marksPhysics = 90;
const marksEnglish = 85;
console.log(marksEnglish <= marksPhysics); // true
console.log(marksEnglish >= marksPhysics); // false

//Task 10
const rollNumber = 2576;
const EnrollNum = '2576';
console.log(rollNumber == EnrollNum); // true
console.log(rollNumber === EnrollNum); // false
console.log('\n');

//Activity 4 - logical Operators
//Task 11
// Write a program that uses the && operator to combine two conditions and log the result to the console

console.log('Activity - 4');
const age = 18;
const drivingSkill = false;

if(age && drivingSkill){
    console.log('you got driving license')
}
else{
    console.log('try later');
}

//Task 12
// Write a program that uses the || operator to combine two conditions and log the result to the console
const graduated =  true;
const Experience = false;

if ( graduated || Experience){
    console.log('you got job');
}
else{
    console.log('better luck next time');
}

//Task 13
// Write a program that uses the || operator to combine two conditions and log the result to the console

if(!true){
    console.log('passed')
}
console.log('failed');


console.log('\n');
//Activity 5
//Task 14
// Write a program that uses the || operator to combine two conditions and log the result to the console

console.log('Activity 5');
const number = 25;
console.log((number%2==0) ? 'positive': 'negative');