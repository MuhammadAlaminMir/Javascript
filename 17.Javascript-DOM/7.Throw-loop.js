let listItem = document.getElementsByTagName("li");

//html collection is an array like data structure but not an array
//getElementByTagName give us an array like data structure but its didn't give the array that why we can't use arrays method
//thats why we have to convert it into an array

// first system to convert to ar array:
// let listItems = Array.from(listItem);

//another way to covert an array
// let listItems = Array.prototype.slice.apply(listItem);

//es6 version
let listItems = [...listItem];

listItems.forEach((li, ind) => {
    let text = li.innerHTML;
    li.innerHTML = `${ind + 1}. ${text}`;
});
