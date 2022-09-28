/*
    Binary Search: Searching algorithm in O(log n)
    Relies on an already sorted array 
    Returns the index of x in array
*/
let list_one = [1,2,3,4,5,6,7,8] 
let list_two = [3,26,1,66,8,29]
let list_two_sorted = [1,3,8,26,29,66]
let list_single = [3]
function linear(list, x) {
    for(let i = 0; i < list.length; i++){
        if(list[i] === x){
            return i
        }
    }
    return -1
}
function binary(list, x){
    let start = 0 
    let end = list.length - 1 
    let mid = Math.ceil((start + end) / 2)
    //what is our iteration's conditional gonna be
    //if list[mid] != x, while we haven't found x
    //while we still have a sublist
    while(start <= end ){
        //console.log(start, end)
        //check if x is in left or right half 
        if(x < list[mid]){
            //in left half 
            end = mid - 1 
        } else if (x > list[mid]) {
            //in right half 
            start = mid + 1
        } else if (list[mid] === x){
            //we found the correct index 
            return mid 
        }
        //update mid 
        mid = Math.floor((start + end) / 2)
    }
    return -1
}

// console.log(binary(list_one, 3)) //2
// console.log(binary(list_two_sorted, 66)) //5
// console.log(binary(list_two_sorted, 66666)) //-1
// console.log(binary(list_single, 3)) //0
// console.log(binary(list_single, 9999)) //0


let arr = [-10, -1, 0, 3, 10, 11, 30, 50, 100]
let arr1 = [-10, -5, 0, 3, 7]
let arr2 = [0, 2, 5, 8, 17]
let arr3 = [-10, -5, 3, 4, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]


function fixedPoint(arr){
    let low = 0
    let high = arr.length - 1
    while(low <= high) {
        let i = Math.floor((low + high) / 2) //represents middle index
        //return 
        if (i === arr[i]){
            return i
        }
        //go right 
        if (i > arr[i]) {
            low = i + 1
        //go left
        } else if (i < arr[i]) {
            high = i - 1
        }
    }
    return -1;
}

console.log(fixedPoint(arr)) //3
console.log(fixedPoint(arr1)) //3 
console.log(fixedPoint(arr2)) //0
console.log(fixedPoint(arr3)) //-1





