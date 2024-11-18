function sayMyName()
{
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");  
    
}

//sayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1+number2);
    
//}

//addTwoNumbers(3,4)

/*function addTwoNumbers(number1, number2){
    console.log(number1+number2);
    
}

const result = addTwoNumbers(3,4)
console.log("Result:", result);*/

function addTwoNumbers(number1, number2){
    //let result = number1+number2
    //return result 
    return number1 + number2
    
}

const result = addTwoNumbers(3,4)
//console.log("Result:", result);

/*function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Dani"));*/

function loginUserMessage(username="ass"){
    if(!username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aman"));

function calculateCartPrice(val1, val2,...num1){
    return num1

}

//console.log(calculateCartPrice(200, 400,600,700, 800));

const user = {
    username: "Aman",
    price: 1999
}

function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 200
})

const newArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 600, 800]));







