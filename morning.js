/*
Phase 2 Week 1 Day 1: Aug. 8, 2022
  1. Given an array of strings, map through the strings and return a new array with each string reversed
Ex. ['bat', 'metz', 'seal', 'ten'] => ['tab', 'ztem', 'laes', 'net']
  2. Give an array of strings where every other character is uppercase, return an array where the        casing is reversed
Ex. ['BaT', 'mEtZ', 'SeAl', 'tEn'] => ['bAt', 'MeTz', 'sEaL', 'TeN']
  3. Given an array of integers return a new array containing only the prime numbers (use .filter)
Ex
[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [2, 3, 5, 7, 11, 13]
*/

//~~~~~~~~~~~~~~~~~~~~~~~1. reverse string
const test = ['bat', 'metz', 'seal', 'ten']
//using built in methods
let revTestOne = test.map((el) => {
    return el.split('').reverse().join('')
})
//using helper function flipper
const flipper = function(el) { //el = bat
    //builds new string from el
    let newStr = '';
    //iterator works backwards through each index of el
    for(let i = el.length - 1; i >= 0; i--){
        newStr += el[i]
    }
    return newStr;
}
let revTestTwo = test.map(flipper)



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~2. case string
const caseTest = ['BaT', 'mEtZ', 'SeAl', 'tEn']
let caseTestOne = caseTest.map(el => {
    //build up new string
    let newStr = ''
    //examine each character in current string, el
    for (let i = 0; i < el.length; i++){
        //if current character is uppercase, add lowercase version to newStr
        if(el[i].toUpperCase() === el[i]){
            newStr += el[i].toLowerCase()
        //else do the opposite
        } else {
            newStr += el[i].toUpperCase()
        }
        //ternary version
        //el[i].toUpperCase === el[i] ? newStr += el[i].toLowerCase() : newStr += el[i].toUpperCase()
    }
    //return newStr so map can replace el in array
    return newStr
})


//~~~~~~~~~~~~~~~~~~~~~~~~3. prime numbers
const primeTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let primeTestOne = primeTest.filter((el) => {
    for(let i = 2; i < el; i++){ //there are ways to optimize for large numbers
        if(el % i === 0){
            return false;
        } 
    }
    return true;
})


/*
Phase 2 Week 1 Day 2
    1. Function to print nth number in the fibonacci sequence. Ex. fib(9) =>  21
    2. Given an array of strings filter out all strings with unique characters Ex. ['banana', 'cat', 'apple', 'dog] => ['cat', 'dog']
*/

//1. fib
const fib = function(n){
    let prev = 0;
    let cur = 1;
    for(let i = 2; i < n; i++){
        let newPrev = cur;
        let newCur = cur + prev;
        cur = newCur;
        prev = newPrev;
    }
    return cur;
}

const uniqueTest = ['banana', 'cat', 'apple', 'dog']
//2. filter out strings with unique characters
const uniqueChars = function(arr) {
    return arr.filter((el) => {
        //could use a set 
        let dict = {}
        for(let i = 0; i < el.length; i++){
            if (dict.hasOwnProperty(el[i])){
                return false //immediately exists callback and doesn't check rest of chars
            } else {
                dict[el[i]] = 1;
            }
        }
        return true;
    })
}





/*
Phase 2 Week 1 Day 3:
1. Given a 2D array of strings where the first element represents a color and the second element represents an association, create a dictionary of key/value pairs where the color is the key and the association is the value.

[["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "annoying people"], ["orange", "orange"]] =>
{
    white: "flowers", 
    red: "blood",
    yellow: "sun", 
    blue: "sky", 
    brown: "earth", 
    black: "night", 
    purple: "annoying people", 
    orange: "orange"
}

2. Given an array of strings write a function that removes all spaces in each string
Ex. 

['app le', 'se ri ous', 'fell ow ship', 'red bul l'] => ['apple', 'serious', 'fellowship', 'redbull']
*/

//1. association
const colorAssTest = [["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "annoying people"], ["orange", "orange"]]
const colorAssociation = function(arr) {
    let dict = {};
    arr.forEach((el) => {
        dict[el[0]] = el[1]
    })
    return dict;
}

//2. remove white spaces
const removeSpaceTest = ['app le', 'se ri ous', 'fell ow ship', 'red bul l'];
const removeSpaces = function(arr){
    return arr.map((el) => el.replaceAll(' ', ''))
}

/* Phase 2 Week 1 Day 4
1. Given an integer n that is the square of some integer x, find the next perfect square.  You should be returning the square of x + 1.  If n is not a perfect square return -1. 
    Ex. 121 => 144, 114 => -1, 625 => 676
2. Given an array of unsorted integers, return the missing integer.
	Ex. [1, 3, 6, 5, 2] => 4
	    [5, 2, 4, 3] => 1
*/

//1. nextPerfectSquare
const nextPerfectSquare = function(n){
    let sqrt = Math.sqrt(n);
    if(Math.floor(sqrt) !== sqrt){
        return -1
    }
    return (sqrt + 1)**2;
}

//2. missing integer
const missingIntTestOne = [1, 3, 6, 5, 2]
const missingIntTestTwo = [5, 2, 4, 3]
const missingInteger = function(arr){
    for(let i = 1; i <= arr.length; i++){
        if(!arr.includes(i)){
            return i
        }
    }
    return -1
}
