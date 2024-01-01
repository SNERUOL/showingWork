// #11
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
//TODO : calculate the downwar rounded average of the marks array
}

// Answer:

function getAverage(scoreArray){
  const count = scoreArray.length;
  let sum = 0;
  
  for (let i = 0; i < count; i++) {
    sum = sum + scoreArray[i];
  }
  
  const avg = sum / count;
  const roundedDown = Math.floor(avg);
  
  return roundedDown;
  
}



// #12
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
};

// Answer:
const rps = (player1, player2) => {
  if (player1 === 'rock') {
    if (player2 === 'rock') {
      return'Draw!';
    }
    
    if (player2 === 'paper') {
      return 'Player 2 won!';
    }
    
    if (player2 === 'scissors') {
      return 'Player 1 won!';
    }
   }
  
  if (player1 === 'paper') {
    if (player2 === 'rock') {
      return'Player 1 won!';
    }
    
    if (player2 === 'paper') {
      return 'Draw!';
    }
    
    if (player2 === 'scissors') {
      return 'Player 2 won!';
    }
  }
  
  if (player1 === 'scissors') {
    if (player2 === 'rock') {
      return'Player 2 won!';
    }
    
    if (player2 === 'paper') {
      return 'Player 1 won!';
    }
    
    if (player2 === 'scissors') {
      return 'Draw!';
    }
  }
};

/*

  Rock = r
  Paper = p
  Scissors = s
  
  Player 1        Player 2        Result
    r               r               Draw
    r               p               p2
    r               s               p1
    p               r               p1
    p               p               Draw
    p               s               p2
    s               r               p2
    s               p               p1
    s               s               Draw 

*/



// #13
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 //You got this!

};

// Answer:
function remove(Char(str){

  const lengthOfString = str.length;

  return str.substr(1, lengthOfString - 2);

}



// #14
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  // Code
}

// Answer:
function basicOp(operation, value1, value2) {
 
  const operationString = value1 + operation + value2;
  
  const result = eval(operationString);
  
  return result;
}



// #15
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return '';
}

// Answer:
function repeatStr (numberOfRepeats, str) {
  
  let starterString = '';
  
  for (let i = 0; i < numberOfRepeats; i++) {
    starterString = starterString + str;
  }
  
  return starterString;
}



// #16
// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

	// code code code

}

// Answer:
function stringToArray(string){

	return string.split(" ");

}



// #17
// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){

}

// Answer:
function noSpace(str){
  const arr = str.split(" ");
  
  let newArray = [];
  
  for (let i = 0; i < arr.length; i++); {
    const trimmedString = arr[i].trim();
    newArray.push(trimmedString);
  }
  
  const finalString = newArray.join("");
  
  return finalString;
}



// #18
//Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x){

}

// Answer:
function maps(arr){
  
  const result = arr.map((arrItem) => {
    return arrItem * 2;
  })
  
  return result;
}



// #19
//A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
//Get Coding!
}

// Answer:
function hero(bullets, dragons){

  return bullets / dragons >= 2 ? true : false;
  
}



// #20
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}

// Answer:
function arrayPlusArray(arr1, arr2) {
  
  let sum = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    const arr1Value = arr1[i];
    const arr2Value = arr2[i];
    
    const addedValue = arr1Value + arr2Value;
    
    sum = sum + addedValue;
  }
  
  return sum;
}
