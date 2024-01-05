// In here 1 is false because it does not contain the letter 'g' in the string, 
// 2 is true because there is a letter 'g' in the sentence.
const regex = new RegExp('g');
undefined
const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
undefined

regex.test(string1);
false
regex.test(string2);
true 

// In here both strings return true because both have the word 'favorite'.
const regex2 = new RegExp('favorite');
undefined
regex2.test(string1);
true
regex2.test(string2);
true 

// In here both return false because this is casesensitive:
const regex = new RegExp('FavoritE');
undefined
const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
undefined
regex.test(string1);
false
regex.test(string2);
false 

// Popular or common special characters:

// we can also write regexp like this:
/FavoritE/.test(string1);
false

/favorite/.test(string1);
true 

const regex = new RegExp('FavoritE');
undefined
const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
undefined
regex.test(string1);
false
regex.test(string2);
false
// we can also write regexp like this:
/FavoritE/.test(string1);
false
/favorite/.test(string1);
true
/[A-Z]/.test(string1)
false
/[a-z]/.test(string1)
true
/[0-9]/.test(string1)
false
/[A-Za-z0-9 ]/.test(string1)
true
/./.test(string1)
true
/\d/.test(string1)
false
// this last one = [0-9]
undefined
/\s/.test(string1) //which looks at white space characters
true
/\w/.test(string1) //which looks at all letters AND numbers
true
/^/.test(string1)
true
/^f/.test(string1) //this is false because the first letter of string1 does not start with the f
false
/^m/.test(string1)
true
/f$/.test(string1) //this is false because f is not the last letter of string1
false
/(code|steak)/.test(string1) //either code OR steak in string1
true 

// Quantifiers
const regex = new RegExp('FavoritE');
undefined
const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
undefined
/[a-z]/.exec(string1); //this lookts at the first letter and says yes here is a small letter m
Array [ "m" ]

/[a-z ]{2,6}/.exec(string1);

Array [ "my fav" ]

const regex = /[a-z]+/g //which represents the flag of Global Search (from the documentation)
undefined 

/^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(str);
Array [ "hello world, 2021  @ more of a string" ]

 
