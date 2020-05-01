//we got little byte of data structure in es6
//one of the data structure is sets
//and now we are going to explore that
//we can't duplicate any data in set
//if we duplicate any data set will skip it

//making sets

let set = new Set([1, 22, 3]);
// let set = new Set();

set.add(5);
set.add(6);
set.add(1); //nothing will happen
console.log(set);

//we have many method with set like

//set.clear()  /for clear set
// set.delete(22); // for delete some data
//console.log(set.has(5)) //check data it already exist or not

//we can iterate in set
// let keyIterate = set.keys();
// console.log(keyIterate.next());
// console.log(keyIterate.next());

// checking the set is Iterable?

// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === "function";
// }

// console.log(isIterable(set));

//running for of loop

for (let v of set) {
    console.log(v);
}

console.log(set.entries());

//we also have weekSet this type of set ar week we can do anything with their value
//we only set into weekSet an object
//example

let a = ({ a: 10 }, (b = { b: 20 }));

let weakSet = new WeakSet([a, b]);

a = null;

console.log(weakSet.has(a));
