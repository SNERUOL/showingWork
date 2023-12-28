// Arythmetic operators
// + - * / % ** ++ --
20 + 50;
70
Content-Security-Policy: Ignoring ‘x-frame-options’ because of ‘frame-ancestors’ directive.
Content-Security-Policy warnings 2
Lege string doorgegeven aan getElementById(). m=_b,_tp:59:124
50 - 20;
30
20/2;
10
2*2
4
// Not actual valid JS code, works in the console but not in a file
const result = 20 + 50 / 2;
undefined
result
45
// everything on the right side of the operator is called the 'expression'
100 % 50
0
// this is a modulus operator
100 % 77
23
// the exponent operator
8**2
64
const startingNumber = 0;
undefined
startingNumber++
Uncaught TypeError: invalid assignment to const 'startingNumber'
    <anonymous> debugger eval code:1
debugger eval code:1:1
let startNumber = 0;
undefined
startingNumber++
Uncaught TypeError: invalid assignment to const 'startingNumber'
    <anonymous> debugger eval code:1
debugger eval code:1:1
startingNumber
0
startingNumber + 1;
1 

// Assingment Operators
// = += -= *= /=
// the = is also an operator
const myVariable = 20;
undefined
let x = 10;
undefined
x = x + 5;
15 

let x = 10;
undefined
// you can write this shorter
x+=5;
15
x
15
x+=5;
20
x-=5;
15
x/=3;
5
x*=2;
10 

x = x + 5
15
// still works and keeps you from memorizing a lot of stuff

​// Comparison Operators / Equality Operators
// == === != !== > < >= <=
// possibly the hardest to learn

const result = 20 > 18;
undefined
result
true
const result2 = 20 === 20;
undefined
result
true

// 20 === 20 means both are equal in value and type
// = is not doing the same thing as ===

20 == 20;
true
20 === 20;
true
// the difference is in the datatype we are working with
// here in the first case we are looking at a number
// in the second case it is a string

20 == '20'
true 

const numberValue = 20;
undefined
const stringValue = '20';
undefined
typeof numberValue
"number"
typeof stringValue
"string" 

const stringValue = '20';
undefined
const numberValue = 20;
undefined
stringValue == numberValue
true
// this returns true, because while these are not the same datatypes, they are the same value.

undefined
Number(stringValue);
20
// this also returns the valid javascript number of 20

stringValue == numberValue
true
// in this case it is comparing apples to apples because it is first converting to the same datatype and then compare it to the numbervalue
undefined

stringValue === numberValue;
false

// now it is not converting the two types to match eachother
// yes the numbers are equal but not the datatype
// == does not care about the datatype
// === does care about the datatype
// using === is recommended because of being much more explicit in writing the code
undefined

Number(stringValue) === numberValue;
true

const resultVariable = stringValue == numberValue;
undefined
resultVariable
true 

const numberValue = 20;
undefined
const stringValue = '20';
undefined
numberValue === stringValue;
false
numberValue == stringValue;
true
numberValue != stringValue;
false
numberValue !== stringValue;
true 

// Numeric Comparison Operators
// > < >= <=
undefined
40 > 20
true
20 < 40
true
20 <= 20
true
20 >= 20
true

// Ternary Operator

const result = 20 === 20 ? 'values match' : 'values do not match';
undefined
result
"values match"
let resultVariable;
undefined
if (20 === 20) {
  resultVariable = 'values match';
} else {
  resultvariable = 'values do not match';
}
"values match"
resultVariable
"values match" 

// Logical operators
// && || !
20 === 20 && 10 === 10
true
20 === 20 && 10 === 12
false
20 === 20 || 10 === 12
true
20 === 18 || 10 === 12
false
// && means both sides are equal
// || means one side is eqeal
undefined

// !
!(20 === 20)
false
const isUserLoggedIn = true;
undefined
const doesUserHavePermissions = false
undefined
const canUserPerformAction = isUserLoggedIn && doesUserHavePermissions;
undefined 
if (canUserPerformAction)


// this code is not readable and it is better to cut these in multiple steps
undefined
const result = !(((40 / 20) === 2 && true) || ('yes' === 'no'));
undefined
result
false

const step1 = 40 / 20;
undefined
const step2 = step1 === 2;
undefined
step2
true
const step3 = step2 && true;
undefined
step3
true
const step4 = 'yes' === 'no';
undefined
const step5 = step3 || step4;
undefined
step5
true
const step6 = !step5;
undefined
step6
false 

// Code Challenges:

// Challenge 1:
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
// const does not let you change the value of the variable
// we have to use:
let numberVariable = 0;
undefined
numberVariable++;
0
numberVariable++;
1
numberVariable++
2 

// Challenge 2:
// Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

// No, they do not result in the same answer. The first code block will evaluate to false while the second code block will evaluate to true.

// Which one is better? Well that's a bit of a trick question. When looking at this code, there is no reason why secondNumber should be a string data type. Here is how I would write this:

const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber === secondNumber;
…
true


// Challenge 3:
//What does expression5 evaluate to? How could you write this in a single line of code (for exercise purposes only; you would never want to combine all this in one line)?

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// Answer:
const expression1 = 100 % 50;
undefined
expression1
0
const expression2 = 100 / 50;
undefined
expression2
2
const expression3 = expression1 < expression2;
undefined
expression3
true
const expression4 = expression3 && 300 + 5 === 305;
undefined
expression4
true
const expression5 = !expression4;
undefined
expression5
false 

// Challenge 4:
What does result evaluate to? You might want to review the previous lesson for this one.

const myObj = {
  prop1: 'first value',
  prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

// Answer:
const result = 20 === (40 / 2);
undefined
result
true 

// Challenge 5:
// What does result evaluate to?

const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

// Answer:
// So really, our expression is simply 100 * 5 > 150 * 2, which can be further simplified to 500 > 300, which equals true.

