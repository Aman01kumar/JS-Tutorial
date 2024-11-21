const user = {
    userName: "Sam",
    price: 856,

    welcomeMessage: function() {
        //console.log(`${this.userName}, Welcome to Website`);
        //console.log(this);
        
        
    }
}

//user.welcomeMessage()
//user.userName = "Aman"
//user.welcomeMessage()

//console.log(this);

/*function chai(){
    let userName = "Aman"
    console.log(this.userName); 
}

chai()

const chai = function() {
    let userName = "Aman"
    console.log(this.userName);
}

chai()*/

const chai = () => {         // Arrow Function
    let userName = "Aman"
    console.log(this.userName);
    console.log(this);
    
}

//chai()
/* 
const addTwo = (num1, num2) => {
    return num1 + num2

}
/*
console.log(addTwo(7,9));

const addThree = (num1, num2, num3) => num1 + num2 + num3

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)*/

const addTwo = (num1, num2) => ({userName:"Aman"})

//console.log(addThree(5,6,9));
//console.log(addFour(7,3,9,5));

console.log(addTwo(3,5));







