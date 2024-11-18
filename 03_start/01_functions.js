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

console.log(loginUserMessage("Aman"));




