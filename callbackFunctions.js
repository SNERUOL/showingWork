// Example:

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


// Now the exact same but shorter:

function mainFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, (num) => num * 2);
40 

