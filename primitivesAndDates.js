const string1 = new String('Hello, world!');
const string2 = 'Hello, world!';
console.log(string1 === string2); // false
console.log(string1 == string2); // true
false debugger eval code:3:9
true debugger eval code:4:9
undefined

/*   
    In here the first string is an object (see also the 'new' operator).
    The second string is a string.
    So when comparing these 2 the === is looking at both value AND type and is false.
    The second is true because they are the same value just not the same type. 

    In here string1 isn't actually a string but an object
    Let's start by asking the question: what is a primitive?
    In JavaScript there are 6 primitive data types:
      string, number, begint, boolean, undefined and symbol.
    It is the simplest form of something.
    A primitive data type does not have any sort of methods or functions that you can call on them.

*/

'some string'.toUpperCase()
"SOME STRING"

// Dates:

const now = new Date();
undefined
now
Date Thu Jan 04 2024 13:28:40 GMT+0300 (GMT+03:00)
// the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC.

now.valueOf()
1704364120779 

const myDate = new Date();
undefined
myDate
Date Thu Jan 04 2024 13:33:00 GMT+0300 (GMT+03:00)

myDate.toString()
"Thu Jan 04 2024 13:33:00 GMT+0300 (GMT+03:00)"
myDate.toISOString();
"2024-01-04T10:33:00.106Z"
myDate.getDate();
4
myDate.getMonth()
0
myDate.getFullYear()
2024 

