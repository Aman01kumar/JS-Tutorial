const tinderUser = {}

tinderUser.name = "Sam"
tinderUser.id = "145bb"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userFullName: {
            firstName: "sam",
            lastName: "Punk"
        }
    }
}

/*console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "f", 6: "g"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email

//console.log(tinderUser);

/*console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));*/

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Aman"
}

const {courseInstructor: instructor} = course

console.log(instructor);
//console.log(courseInstructor);

/*{
    name: "Aman",
    "courseName1": "Js in Hindi",
    "price": "Free"

}*/

[
    {},
    {},
    {}
]












