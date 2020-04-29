//when want store data in an organized system that time we use data structure
//set and map are data structure
//in map we can work with key and value
//map is a key value pair
//in map we can use anything as a key like (string , number, object)

//declaring Map

let map = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30],
]);
//we can set new value outside of the array

map.set("d", 40);

console.log(map);

//map also have many method

// map.delete("a"); /for delete any key
// map.clear(); /for clear
// console.log(map.get("a")); for get some data
// console.log(map.size); for find size
// console.log(map.values()); for values

for (let [k, v] of map) {
    console.log(k, v);
}

map.forEach((v, k) => {
    console.log(k, v);
});

//Weak mep is same as weak set
//this is the weak version of map data structure

let p = { p: 10 },
    e = { e: 20 };

let weakMap = new WeakMap([
    [p, 45],
    [e, 35],
]);

p = null;

console.log(weakMap.has(p));
