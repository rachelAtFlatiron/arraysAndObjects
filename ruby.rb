require 'pry'

# //~~~~~~~~~~~~~~~~~~~~~~~1. reverse string
# const test = ['bat', 'metz', 'seal', 'ten']
# //using built in methods
# let revTestOne = test.map((el) => {
#     return el.split('').reverse().join('')
# })
# //using helper function flipper
# const flipper = function(el) { //el = bat
#     //builds new string from el
#     let newStr = '';
#     //iterator works backwards through each index of el
#     for(let i = el.length - 1; i >= 0; i--){
#         newStr += el[i]
#     }
#     return newStr;
# }
# let revTestTwo = test.map(flipper)


test = ['bat', 'metz', 'seal', 'ten']
rev_proc = Proc.new { |el| 
    new_str = ''
    for i in 0...el.length do 
        new_str = el[i] + new_str
    end 
    new_str
}
rev_test = test.map {
    |str| rev_proc.call(str)
}
p rev_test

# //~~~~~~~~~~~~~~~~~~~~~~~~~~~~2. case string
# const caseTest = ['BaT', 'mEtZ', 'SeAl', 'tEn']
# let caseTestOne = caseTest.map(el => {
#     //build up new string
#     let newStr = ''
#     //examine each character in current string, el
#     for (let i = 0; i < el.length; i++){
#         //if current character is uppercase, add lowercase version to newStr
#         if(el[i].toUpperCase() === el[i]){
#             newStr += el[i].toLowerCase()
#         //else do the opposite
#         } else {
#             newStr += el[i].toUpperCase()
#         }
#         //ternary version
#         //el[i].toUpperCase === el[i] ? newStr += el[i].toLowerCase() : newStr += el[i].toUpperCase()
#     }
#     //return newStr so map can replace el in array
#     return newStr
# })
caseTest = ['BaT', 'mEtZ', 'SeAl', 'tEn']
caseTest = caseTest.map{ |el| 
    new_str = ''
    for i in 0...el.length do 
        if(el[i].upcase == el[i])
            new_str += el[i].downcase 
        else 
            new_str += el[i].upcase 
        end 
    end 
    new_str 
}
p caseTest


# //~~~~~~~~~~~~~~~~~~~~~~~~3. prime numbers
# const primeTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# let primeTestOne = primeTest.filter((el) => {
#     for(let i = 2; i < el; i++){ //there are ways to optimize for large numbers
#         if(el % i === 0){
#             return false;
#         } 
#     }
#     return true;
# })

prime_test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

prime_test_one = prime_test.select { |el|  
    #binding.pry
    flag = true
    for i in 2...el do  
        if el % i == 0 
            flag = false 
        end 
    end 
    flag 
}
p prime_test_one

# //~~~~~~~~~~~~~~~~~~~~~~~~1. fib
# const fib = function(n){
#     //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
#     //sum of previous two numbers 
#     //edge cases (non-recursively) / base cases 
#     let prev = 0;
#     let curr = 1;
#     //start at 2 because we already accounter for the first two numbers: 0, 1
#     for(let i = 2; i < n; i ++){ 
#         let newCurr = prev + curr;
#         console.log(`${prev} + ${curr} = ${newCurr}`)
#         prev = curr;
#         curr = newCurr;
#     }
#     return curr;
# }

def fib n 
    prev = 0
    curr = 1
    for i in 2...n + 1 do 
        new_curr = prev + curr 
        prev = curr 
        curr = new_curr 
    end 
    curr 
end 
p fib 9


# //~~~~~~~~~~~~~~~~~~~~~~~~2. filter unique chars
# //['banana', 'cat', 'apple', 'dog']
# const uniqueChars = function(arr){
#     return arr.filter((word) => {
#         //create empty object to keep track of count per character
#        //for loop through each character in word 
#             //if character exists as key, add 1 to value
#                 //return false
#             //else create new key value pair 
#         //return true 
#     })
# }
unique_arr = ['banana', 'cat', 'apple', 'dog']
unique_arr = unique_arr.filter{ 
    |n| 
    flag = true 
    dictionary = {} 
    n.split('').each { |c| 
        if dictionary[c]
            flag = false 
        else 
            dictionary[c] = 1
        end   
    } 
    flag 
}
p unique_arr

# const convertDictTest = [["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "violet"], ["orange", "orange"]]
# const convertDict = function(arr){
#     let newObj = {}
#     // arr.map((el) => {
#     //     newObj[el[0]] = el[1]
#     // })
#     //for each individual array inside
#     for(let i = 0; i < arr.length; i++){
#         //for each element inside current nested array
#         console.log(arr[i]);
#         for(let j = 0; j < arr[i].length; j++) {
#             console.log(arr[i][j])
#         }
#     }
#     return newObj;
# }
$convert_dict_test = [["white", "flowers"], ["red", "blood"], ["yellow", "sun"], ["blue", "sky"], ["brown", "earth"], ["black", "night"], ["purple", "violet"], ["orange", "orange"]]

def convert_dict
    convert_dict_hash = {}
    for i in $convert_dict_test do 
        convert_dict_hash[i[0]] = i[1]
    end  
    convert_dict_hash
end 

p convert_dict