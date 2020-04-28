//Arrow Function

//we have a fat arrow

//normal function
function add(a, b) {
    return a + b;
}

//function expression

let sum = function (a, b) {
    return a + b;
};

//Advance/ Arrow function
//for arrow function we always have to write expression function its means that we always have to
//declare arrow function into a variable
//in arrow func when we return just 1 line we didn't have to give carly bracket({}) and all don't need to give return

let sum = (a, b) => (a += b);

let add = (a, b) => {
    return a + b;
};

//Arrow function with This
//Arrow function didn't have any this its always go to its parent
//we can't use call/bind/apply method with arrow function
//when we declare an object we have to use normal function or else we didn't get into it the value of this
