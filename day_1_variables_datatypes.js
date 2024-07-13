/* Challenge Name : 30 Days Javascript Challenge */
/* Day1 Challenge : Variables & Data Types */

// Task Activities 

//Activity 1 : Variable Declaration
// Task 1 : Declare a variable using var, assign it a number, and log the value to the console
// Task 2 : Declare a variable using let, assign it a string, and log the value to the code

//Task 1
console.log('Task - 1')
var countryNumber = 195;
console.log(`Countries in the world : ${countryNumber}`);
console.log('\n')

//Task 2
console.log('Task - 2')
let visitPlace = 'Bahamas';
console.log(`But i love to go : ${visitPlace}`);
console.log('\n')

//Activity 2 : Constant Declaration 
// Task 3 : Declare a variable using const, assign it a boolean Value, and log the value the console.
console.log('Task - 3')
const  isIsland= true;
console.log(`is it a Island ?: ${isIsland}`);
console.log('\n')

//Activity 3 : Constant Declaration 
// Task 4 : Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator
console.log('Task - 4')
const independentYear = 1973 //Number
console.log(`The Bahamas became an independent country within the Commonwealth in ${independentYear}`);
console.log(`Data Type is`, typeof independentYear);
console.log('\n')

const officialLanguage = 'English' //String
console.log(`Official language of Bahamas is ${officialLanguage}`);
console.log(`Data Type is`, typeof officialLanguage);
console.log('\n')

const partOfUsa = false //boolean
console.log(`is Bahamas part of USA? : ${partOfUsa}`);
console.log(`Data Type is`, typeof partOfUsa);
console.log('\n')

const CountryInfo = {
    capital: 'Nassau',
    currency: 'Bahamian Dollar',
    continent : 'North America',
    'Prime Minister': 'Philip Davis',
} //Objects

for (const key in CountryInfo) {
    if (CountryInfo.hasOwnProperty(key)) {
        console.log(`${key} : ${CountryInfo[key]}` );   
    }
}
console.log(`Data Type is`, typeof CountryInfo);
console.log('\n')


const beaches = ['Nassau', 'Pig Beach', 'FreePort', 'Bimini', 'Treasure Cay']; //Objects

console.log(`Beaches in Bahamas: `)
beaches.forEach(element => {
    console.log(`${element}`);
});
console.log(`Data Type is`, typeof beaches);
console.log('\n')

//Activity 4 : Reassigning Variables
// Task 5 : Declare a variable using let, assign it an initial value, reassign a new value, and log both values to console.

console.log('Task - 5')
let BeachesNumber = 1600;
console.log(`the Number of Beaches in Bahamas : ${BeachesNumber}`);
BeachesNumber = 2000;
console.log(`the Number of Beaches in Bahamas : ${BeachesNumber}`);
console.log('\n')

//Activity 5 : Understanding Const
// Task 6 : try reassigning a variable declared with const and observe the error.

console.log('Task - 6')
const drivingSide = 'left';
console.log(`Driving Side : ${drivingSide}`);
drivingSide = 'right'
console.log(`Driving Side : ${drivingSide}`)
console.log('/n')
//Showing Error
//Assignment to constant variable.