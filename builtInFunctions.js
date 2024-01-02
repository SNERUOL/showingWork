/* 
In the video the subject is about being a developer and you have to search a lot for solutions to solve problems. How do you do this?
An example is looking on the MDN web docs.
On here an example is the array.prototype.pop method.
Syntax: arr.pop()

"The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array".
*/

// Example:
const arr = [1, 2, 3];
undefined
arr
Array(3) [ 1, 2, 3 ]

arr.pop()
3
arr
Array [ 1, 2 ]

/* Another example is the array.prototype.join method and this one is a bit more complex.
The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator.
Syntax: arr.join(separator) In here the separator is optional.
*/

// Example:
const strArray = ['hello', 'world'];
undefined
strArray.join(" ");
"hello world" 

/* One more example is the array.prototype.includes method. 
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
Syntax: includes(searchElement) or includes(searchElement, fromIndex)
*/

// Example:
// We will talk about this later on.

// Also good to know is to look at the browser compatibility so you know if your application will run in a certain internet browser or not.

