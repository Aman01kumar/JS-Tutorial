//var c = 300
let a = 400

if(true){
    let a = 10
    const b = 20
   // console.log("Inner:", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);
//console.log(a);

function one(){
    const userName = "Aman"

    function two(){
        const website = "YouTube"
        console.log(userName);
        
    }
    //console.log(website);

    two()
    
}

//one()

if(true) {
    const userName = "Aman"
    if(userName === "Aman"){
        const website = " YouTube"
        //console.log(userName +  website);
        
    }
    //console.log(website);
    
}

//console.log(userName);

// ++++++++++++++++ interesting ++++++++++++++++++++
console.log(addone(7))
function addone(num){
    return num +1
}

//addone(4)
addTwo(9)
const addTwo = function(num){
    return num +2
}

//addTwo(6)





