// Callback functions can also be written a lot more simpler:
// So this is what we had:

function myCallback(someNumber) {
  return someNumber * 2;
} 
function mainFunction(randomNumber, shouldCall, callback) {

    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, myCallback);
40
function mainFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}

// But you can also do it like this:

mainFunction(20, true, (num) => num * 2);
40
myCallback(20)
40
mainFunction(20, true, function (num) {
  return num * 2;
})
40
mainFunction(20, true, (num) => {
  return num * 2;
})
40
mainFunction(20, true, num => num *2)
40 

/* 

Why do we need this callback function?
 Reusability and asynchronus programming.

Reusability:
a good example is a array method called: map = Array.prototype.map()
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
So it's basically doing a transformation.
An example:
*/

const myArray = [2, 4, 6, 8];
undefined
function myCustomMapOperationCallback(itemFromArray) {
  return itemFromArray * 2;
}
undefined
const newArray = myArray.map(myCustomMapOperationCallback);
undefined
newArray
Array(4) [ 4, 8, 12, 16 ]

/* 
This does yet show why this callback function is so usefull but what it can actually do is:
to enable the developer to use this same method to a variety of usecases.
*/

const strArray = ["Hello", "world", "my", "name", "is", "Zach"];
undefined
strArray.map(itemFromArray => itemFromArray[0]);
Array(6) [ "H", "w", "m", "n", "i", "Z" ]

/*
Callbacks enable reusability. Callbacks also enable asynchronus programming which is: code that is not run immediately.
*/

