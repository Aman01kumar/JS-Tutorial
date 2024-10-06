const name = "aman"
const repoCount = 6
// console.log(name + repoCount + " value"); // not a right way to use this syntax 

// we use backticks for string interpolation in which we make placeholder and place data directly in them

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way of declairing string is :
const gameName = new String('sammar-04-com')

/*console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());*/
//console.log(gameName.charAt(6));
//console.log(gameName.indexOf('m'));

//subString
const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newSt = "   aman   "
console.log(newSt);
console.log(newSt.trim());

const url = "https://aman.com/aman%40kumar"
console.log(url.replace("%40", "-"));
console.log(url.includes("singh"));

console.log(gameName.split('-'));













