// #21
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  // Finish this :)
  return;
}

// Answer:
function century(year) {
  
 return Math.ceil(year / 100);
}



// #22
/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  return [0,0,0];
}

// Answer:
var humanYearsCatYearsDogYears = function(humanYears) {
  
  let catsAge;
  let dogsAge;
  
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }
  
  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }
  
  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;

  
  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}



// #23
/*
  Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  return 0
}

// Answer:
function points(gamesArray) {
  let totalPoints = 0;
  
  for (let i = 0; i < gamesArray.length; i++) {
    
    const value = gamesArray[i];
    
    const parts = value.split(":");
    
    console.log(parts);
    
    const x = parts[0];
    const y = parts[1];
    
    if (x > y) {
      totalPoints = totalPoints + 3;
    } else if (x === y) {
      totalPoints += 1;
    } else {
      
    }
  }
  
  return totalPoints;
}

