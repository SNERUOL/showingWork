// #1
// This code does not execute properly. Try to figure out why.
function multiply(a, b){
  a * b
}
//Answer:
function multiply(a, b){
  return a * b;
}



// #2
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
// Answer:
// The break statement is missing after each planet name.
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}


// #3
// Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'

// Answer:
function solution(str){
  return str.split('').reverse().join('');  
}



// #4
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  
}

// Answer:
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}



// #5
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  return 0;
}

// Answer:
function getCount(str) {
  let vowelsCount = 0;
  
  const arr = str.split("");
  
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
        case 'a':
          vowelsCount++;
          break;
        case 'e':
          vowelsCount++;
          break;
        case 'i':
          vowelsCount++;
          break;
        case 'o':
          vowelsCount++;
          break;
        case 'u':
          vowelsCount++;
    }
  }
  
  return vowelsCount;



// #6
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

// Answer:
function greet(name){
  if (name === "Johnny") {
    return "Hello, my love!";  
  } else {
    return "Hello, " + name + "!";
  }
}



// #7
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
}

// Answer:
function isDivisible(n, x, y) {
  
  const result1 = n / x;
  const result2 = n / y;
  
  if (result1 % 1 === 0 && result2 % 1 === 0) {
    return true;
  } else {
    return false;
  }
}



// #8
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Answer:
function makeNegative(num) {
  if (num < 0 ) {
    return num;
  } else {
    return num * -1;
  }
}



// #9
// Given an array of integers your solution should find the smallest integer.
// For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    
  }
}

// Answer:
class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {
           
      const arrNumber = arrayOfNumbers[i];
      
        if (i === 0) {
        smallestNumber = arrNumber;
      }
      
      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;        
      }
    }
    
    return smallestNumber;
  }
}



// #10
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  // Code here
}

// Answer:
var summation = function (num) {
  
  let sum = 0;
  
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  
  return sum;
}

