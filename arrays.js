/*
Array things
MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/*
For loop
1. return index of first instance of the greatest number
[3, 1, 8, 2, 8, 3, 7, 1] => 2
[8, 9, 1, 2, 6, 3, 1] => 1
[0, 1, 2, 3, 4, 5, 6, 7, 7, 9] => 9

2. return the second greatest number
[3, 1, 8, 2, 8, 3, 7, 1] => 7
[8, 9, 1, 2, 6, 3, 1] => 8
[0, 1, 2, 3, 4, 5, 6, 7, 7, 9] => 7

3. return sum of numbers
[8, 2, 1, 0, 3] => 14
[2, 2, 2, 2, 2, 2] => 12
*/

/* forEach 
1. fizzbuzz...
if number is divisible by 3 => fizz
if number is divisible by 5 => buzz
if number is divisible by 3 and 5 => fizzbuzz
otherwise return the number
*/

/* map
1. add "a" or "an" to beginning of word 
["puzzle", "laptop", "apple", "napkin", "eye", "umbrella", "mouse"] =>
["a puzzle", "a laptop", "an apple", "a napkin", "an eye", "an umbrella", "a mouse"]

2. return an array with only the vowels of each string
["puzzle", "laptop", "apple", "napkin", "eye", "umbrella", "mouse"] => 
["ue", "ao", "ae", "ai", "ee", "uea", "oue"]

3. for each string, create a new array where each letter in the string is an element
["cat", "red", "glue", "pen", "chair"] => 
[['c','a','t'], ['r','e','d'], ['g','l','u','e'], ['p','e','n'], ['c','h','a','i','r']]
*/


/* filter 
1. find all numbers greater than 5
[3, 2, 9, 1, 8, 7, 5] => 
[3, 2, 1]

2. find all words with a length less than or equal to 8
["westworld", "strange", "saul", "hp", "friends", "office", "bojack horseman"] =>
[ 'strange', 'saul', 'hp', 'friends', 'office' ] 

3. find all words with at least 3 vowels
["westworld", "strange", "saul", "hp", "friends", "office", "bojack horseman"] => 
["office", "bojack horseman"]
*/
