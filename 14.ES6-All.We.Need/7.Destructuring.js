//In javascript (array object) they are structure  which has multiple data
//Sometime we have to break those structure and the this breaking system called destructuring

var person = {
    name: "alamin",
    email: "alaminmir017@gmail.com",
};

//into the past time we have to break data like this

// let name = person.name;
// let email = parson.email;

//But we are smart whit destructuring
//when we use the smart solution we have to declare let and the into an object we have to give the same property name
//and then give it the name of the object which we want to break

// let { name, email } = person;

//must remember we have give the same name of the destructed property
//console.log(name);

//we can do it in multi layer
//But in that case we have do that address: { city, country },

var person = {
    name: "alamin",
    email: "alaminmir017@gmail.com",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};

let {
    name,
    email,
    address: { city, country },
} = person;

console.log(name, email, city, country);

//like the same way we can destructor an array
//but in array we have to remember the index no

let arr = [1, 2, 3, 4, 5];

let [first, second, , , last] = arr;

console.log(first, second, last);
