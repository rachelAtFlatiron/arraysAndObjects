/* :) */
/*
print out each word in an array

given ['saturday', 'minnesota', 'loquacious', 'texas'] 
print
1. saturday
2. minnesota
3. loquacious
4. texas
*/
const array = ['saturday', 'minnesota', 'loquacious', 'texas'];
//1. using arrow instead of keyword funciton
//2. there's only one line of code
let new_array = array.map((el, i) => {
    if (i%2==0){
        return "this is an even index"
    } else {
        return `${i+1}. ${el}` //MUST RETURN THING TO REPLACE
    }
})
// console.log(new_array);

let example = ['red', 'green', 'blue', 'black', 'white']
//['r', 'g', 'b', 'b', 'w']...use .map on example
let firstLetters = example.map((el, i) => {
    return el[0]
})
//['r', 'g', 'blue', 'black', 'w']....use .map on example
let notTheBs = example.map((el,i) => {
    // if(el[0] === 'b') {
    //     return el;
    // } else {
    //     return el[0];
    // }
    return el[0] === 'b' ? el : el[0]
})

//example => ['blue', 'black']
let blueBlack = example.filter((el, i) => {
    return el[0] === 'b';
})
//['green', 'black', 'white']...strings with length > 4
let longLongString = example.filter((el, i) => {
    if(el.length > 4){
        return true //el is a string which is truthy
    } else {
        return false;
    }
    return (el.length > 4)
})
console.log(longLongString);


let shop = [
    {name: 'lskdjf', price: 333333}, 
    {name: 'skdlf', price: 3}
]
let expensive = shop.filter((el, i) => {
    return el.name.includes('j');
})
