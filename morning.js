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
    //
}
//~~~~~~~~~~~~~~~~~~~~~~~~2. filter unique chars
const uniqueChars = function(arr){
    //
}





