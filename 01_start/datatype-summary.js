// primitive : call by value

// types : Strings, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 1234567885465258741n


// Reference : Non-Primitive

// Arrays, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Animation",
    age: 20,
}

/*const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive) and Heap(Non-Primitive)

let myYoutubeName = "itsAman"

let myAnotherName = myYoutubeName
myAnotherName = "codeWithAman"

console.log(myAnotherName);

let userOne = {
    email: "aman@email.com",
    upi: "user@ybl"
}

let UserTwo = userOne
UserTwo.email = "ak@email.com"

console.log(userOne.email);
console.log(UserTwo.email);


