//in es6 object also has come some update

//sometime in object we have some type of variable and some type of object key
//that time we can just give variable its give us right result

let a = 10,
    b = 20;

let obj = {
    a,
    b,
};

console.log(obj);

//when we declare function into a object like print that time we didn't have to give the function key

let obj2 = {
    print() {
        console.log(this);
    },
};
obj2.print();
