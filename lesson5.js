// Conditionals

if ('some string' === 'another string') {
  console.log('the strings are equal');
}   else {
  console.log('the strings are not equal');
}
the strings are not equal debugger eval code:4:11
undefined

if () {} else {}
// this is the basic structure
const myExpression = (20 === 20) && (50 === 50);
Uncaught SyntaxError: expected expression, got ')'
debugger eval code:1:5

const myExpression = (20 === 20) && (50 === 50);
undefined
const firstNumber = 20;
undefined
const secondNumber = 10;
undefined
const jsExpression = firstNumber > secondNumber;
undefined

// Only using an if statement (no "else" statement required here)
jsExpression = firstNumber > secondNumber;
Uncaught TypeError: invalid assignment to const 'jsExpression'
    <anonymous> debugger eval code:2
debugger eval code:2:30

jsExpression
true

if (jsExpression) {
  console.log('this expression is true');
}
this expression is true debugger eval code:2:11
undefined

// An if-else statement:
if (jsExpression) {
  console.log('this expression is true');
} else {
  console.log('this expression is false');…
this expression is true debugger eval code:3:11
undefined
  
// Adding another "code path" with "else if"
// Hint: you can use as many "else if" statements as you want
if (jsExpression) {
  console.log('the expression is true');
} else if (firstNumber > 0) {…
the expression is true debugger eval code:4:11
undefined
                             
// Works the same, just formatted differently
if (jsExpression) { console.log('just a different formatting') };
just a different formatting debugger eval code:2:29
undefined 


// Switch case statement
// When using "if else" it can become a little confusing when you have many if else statements, like for example:

// Index            0        1        2         3         4
const colors = ['orange', 'green', 'yellow', 'purple', 'blue']
undefined
// Gets a random number between 0 and 4 and stores in a variable
const randomIndex = Math.floor(Math.random() * colors.length );
undefined
                             
/*
    Remember, to get a value from an array, we use bracket notation.
    For example, to get 'green', we use 'colors[1]'.

    Since randomIndex will be a random number between 0-4, we can 
        pass this in as our index to retrieve a random color from the array.
*/

const radomColor = colors[randomIndex];
undefined
const randomColor = colors[randomIndex];
undefined
                             
// Conditionals
if (randomColor === 'orange') {
  console.log('the color is orange');
} else if (randomColor === 'green') {
  console.log('the color is green');
} else if (randomColor === 'yellow') {
  console.log('the color is yellow');
} else if (randomColor === 'purple') {
  console.log('the color is purple');
} else if (randomColor === 'blue') {
  console.log('the color is blue');
}
the color is purple debugger eval code:9:11
undefined 

// with a lot of "if else" it can be tough to read sometimes and this is why we can use a switch case statement:
                           
// Index            0        1        2         3         4
const colors = ['orange', 'green', 'yellow', 'purple', 'blue']
undefined
// Gets a random number between 0 and 4 and stores in a variable
const randomIndex = Math.floor(Math.random() * colors.length );
undefined

// Index            0        1        2         3         4
const colors = ['orange', 'green', 'yellow', 'purple', 'blue']
undefined
const randomIndex = Math.floor(Math.random() * colors.length );
undefined
const randomColor = colors[randomIndex];
undefined
                             
// Switch / Case statement:

switch (randomColor) {
  case 'orange':
        console.log('the color is orange');
        break;
  case 'green':
        console.log('the color is green');
        break;
  case 'yellow':
        console.log('the color is yellow');
        break;
  case 'purple':
        console.log('the color is purple');
        break;
  case 'blue':
        console.log('the color is blue');
        break;
}
the color is purple
undefined 

// Loops
const arr = [20, 40, 60];
undefined
arr[0]
20
arr[1]
40
arr[2]
60
// But if you have 1000 values it will not be efficient to do it like this.
undefined
                             
for (let i = 0; i < 100; i++) {
  console.log(i);
}
0 debugger
1 debugger
2 debugger
3 debugger
4 debugger
5 debugger
//...
96 debugger
97 debugger
98 debugger
99 debugger
undefined 

// another simple example:
const arr = ['sdjkvksvbksbjdv', 'sdvjhskdvbskb', 'asdadsaszxmnq', 'skdvbslkdcblkajn', 20, 21, 22, 23, 24, 25, 26, 27, 'dajcknakjdcn', 'kjdcbnslkjcdkajb'];
undefined

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    console.log(arr[i]);
  }
}
20
21
22
23
24
25
26
27
undefined

// Functions
function myFunction() {
  console.log('hello world, this is my first function');
}
undefined
myFunction
function myFunction()

typeof myFunction
"function"
myFunction();
hello world, this is my first function debugger eval code:2:11
undefined

// The next one is calles an emidiately invoked function:
(function anotherFunction() {
  console.log('hello')
}();
Uncaught SyntaxError: missing ) in parenthetical debugger eval code:3:4
(function anotherFunction() {
  console.log('hello')
})();
hello debugger eval code:2:11
undefined 

// Parameters and arguments
function myFunction(param1, param2) {
  console.log(param1);
    console.log(param2);
}
undefined
// in here param1 and param2 are called the parameters.
                             
myFunction();
undefined debugger eval code:2:11
undefined debugger eval code:3:10
undefined
myFunction(20, 'some string');
20 debugger eval code:2:11
some string debugger eval code:3:10
undefined 
// in here 20 and some string are called the arguments.

// Scope
// where are the variables available in the scope?

// here we do it all at once: just give it a name and we're done:
function myFunction () {
  console.log('something');
}
undefined
                             
myFunction
function myFunction()

// here is what we call an anonymous function, we can use it this way because we are assigning it to a variable, so we are giving it a name.
const anotherFunction = function () {
  console.log('another thing');
}
undefined
                             
typeof anotherFunction
"function"
                             
anotherFunction();
another thing
undefined 

// if you try to write a function without a name, something like this:
function () {
  console.log('this does not work');
}
Uncaught SyntaxError: function statement requires a name
// it gives an error because an anonymous function without assigning it to a variable will not work.

// Arrowfunctions

const arrowFunction = () => {
  console.log('i am an arrow function');
}
undefined
arrowFunction();
i am an arrow function
undefined 

const myFunction = () => {
  const a = 20;
        return a;
}
undefined
const result = myFunction();
undefined
result
20
const myFunction2 = () => {
  const a = 20;
        return a < 30; //true
}
undefined
const result2 = myFunction2();
undefined
result2
true 

const myFunction = () => {
  let myNumber = 20;
    return myNumber;
    myNumber = 50;
}
unreachable code after return statement
debugger eval code:4:2
undefined
myFunction
function myFunction()

myFunction();
20 
// here you can see that myNumber = 50 is not being reached because the return has already happened.

const myNumber = 20;
undefined
let myFunction = () => {
  if (myNumber < 50) {
    return 'returned the function early';
  }
…
undefined
myFunction();
"returned the function early" 

const myString = 'zach';
undefined
myString.replace('h', 'k');
"zack"
myString
"zach"
const newName = myString.replace('h', 'k');
undefined
newName
"zack" 

