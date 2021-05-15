// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it the string Dane.
// We check if the variable name is equal to the string Mary.
// The variable name does NOT equal Mary, so the code block for the else
// statement runs.
// The console logs: 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable named secret without assigning it a value.
// We declare a variable named code and assign it the number 123.
// We check to see if code is equal to 123. Code DOES equal 123 so we assign
// the value of 'super' to the variable secret, AND we multiply the value
// of the variable code by 2 making the value of code 246.
// We check to see if the value of code is greater than 250.
// The value of code is 246 which is less than 250, so we DO NOT run the CODE
// in the if statement. The console logs the string super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable isStudent and assign it the boolean true. We declare
// a variable named age and assign it the number 34. We declare a variable
// called zip and assign it the number 55407. We check to see if isStudent
// evaluates to true AND zip is greater than 80000 with a compound conditional.
// isStudent does equal true, but zip is less than 80000 so the compound
// conditional evaluates to false, and we move to the next else if statement.
// We check to see if isStudent equals false OR (||) age is less than 30 with a
// compound conditional. isStudent equals true and age is greater than 30, so
// neither conditon evaluates to true and therefore the whole conditional
// statement evaluates to false. We skip to the next else if statement. We
// check to see if isStudent evaluates to true. isStudent DOES evaluate to true,
// so we run the code in this else if statement.
// The console logs: Welcome to Prime!


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// The variables have the wrong values assigned to them. colorOne should be blue
// and colorTwo should be red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// both colorOne and colorTwo need to be set to purple, so we need to add the
// line:
// colorTwo = 'purple';
// below colorOne = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// This compound conditional is setup as an OR (||) when it should be an AND
// (&&). We need to replace the || with &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// This conditional is reversed. It should be:
// if(age >= minAge) {...}
if(minAge <= age) {
// This console.log call is logging the wrong string. It should log:
// console.log('entry');
  console.log('no entry');
} else {
  console.log('enter');
}
*/
