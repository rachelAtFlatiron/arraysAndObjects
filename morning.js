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
Phase 1 Week 1 Day 2
1. Given a positive integer n return the nth number in the fibonacci sequence. 
   Where the first two elements in the sequence are 0 and 1
    Ex. fib(9) => 21
2. Given an array of strings filter out all strings with unique characters 
    Ex. ['banana', 'cat', 'apple', 'dog] => ['cat', 'dog']
*/
const uniqueTest = ['banana', 'cat', 'apple', 'dog']
//~~~~~~~~~~~~~~~~~~~~~~~~1. fib
const fib = function(n){
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    //sum of previous two numbers 
    //edge cases (non-recursively) / base cases 
    let prev = 0;
    let curr = 1;
    //start at 2 because we already accounter for the first two numbers: 0, 1
    for(let i = 2; i < n; i ++){ 
        let newCurr = prev + curr;
        console.log(`${prev} + ${curr} = ${newCurr}`)
        prev = curr;
        curr = newCurr;
    }
    return curr;
}

//~~~~~~~~~~~~~~~~~~~~~~~~2. filter unique chars
//['banana', 'cat', 'apple', 'dog']
const uniqueChars = function(arr){
    return arr.filter((word) => {
        //create empty object to keep track of count per character
       //for loop through each character in word 
            //if character exists as key, add 1 to value
                //return false
            //else create new key value pair 
        //return true 
    })
}


/*
Phase 1 Week 1 Day 3
Given a 2D array of strings where the first element represents a color and the second element represents an association, create a dictionary of key/value pairs where the color is the key and the association is the value.
Ex. 
[["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "violet"], ["orange", "orange"]] =>
{
    white: "flowers",
    red: "blood",
    yellow: "sun",
    blue: "sky",
    brown: "earth",
    black: "night",
    purple: "violet",
    orange: "orange"
}
*/

const convertDictTest = [["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "violet"], ["orange", "orange"]]
const convertDict = function(arr){
    let newObj = {}
    // arr.map((el) => {
    //     newObj[el[0]] = el[1]
    // })
    //for each individual array inside
    for(let i = 0; i < arr.length; i++){
        //for each element inside current nested array
        console.log(arr[i]);
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
    return newObj;
}


console.log(convertDict(convertDictTest));




