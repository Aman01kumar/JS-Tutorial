// Dates

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);*/

//let mycreateDate = new Date(2024, 10, 8, 6, 5)
//let mycreateDate = new Date("2024-10-08")
let mycreateDate = new Date("10-08-2024")
//console.log(mycreateDate.toDateString());
//console.log(mycreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(mycreateDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric"
}))










