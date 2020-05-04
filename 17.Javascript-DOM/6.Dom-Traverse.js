//Dom Traversing
//we can traverse into dom with:

let list = document.getElementById("list");
console.log(list);

let parent = list.parentElement;
console.log(parent); //to traverse list parentElement

let children = list.children; //for find children
console.log(children);

let prevSibling = list.previousElementSibling; //for previousSibling

console.log(prevSibling);

console.log(list.firstElementChild); //for list first element
console.log(list.lastElementChild); //for lists last element
