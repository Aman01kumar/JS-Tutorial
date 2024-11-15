// singleton - when object created using constructors = (object.create())

// Oject-literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Aman",
    "full Name": "Aman Kumar",
    [mySym]: "myKey1",
    age: 20,
    location: "Noida",
    email: "aman@code.com",
    isLoggedIn: false,
    lastLogInDays: ["Friday", "Wednesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);
console.log(typeof [mySym]);

jsUser.email = "aman@google.com"
//Object.freeze(jsUser)
jsUser.email = "aman@chat.com"
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello Js User"); 
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());









