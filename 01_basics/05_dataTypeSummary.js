
//  Primitive data type (7 types)
// String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.6

const isLoggedIn = false
const outSideTemp = null
// let userEmail;    // it is undefined not empty

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);    // both are not same but the dataType is same (Symbol)

const bigNumber = 65465468526n          // BigInt 




//  Non-Primitive (Refrence) data type
// Array, Objects, Functions

// Array 1
const heros = ["shaktiMan", "NaagRaj", "doga"];

// Array2
let Students = [
    { name: "Sachin", age: 22, marks: 50, },
    { name: "Rahul", age: 34, marks: 33, },
]

// MyObject 
let myArray = {
    name: "Umang",
    age: 23,
    marks: 56
}

// Function
const myFunction = function() {
    console.log("The function is created successfully");
    
}

console.log(heros);
console.log(myArray);
console.log(Students);

