//Deal with Attributes

//Watch DOM Attributes

console.log(list.attributes);
console.log(list.getAttributeNames());
console.log(list.getAttributeNode("class")); //for specific attribute
console.log(list.getAttribute("id"));
console.log(list.classList); //for hole attributes list

//create attributes
let lastItem = list.lastElementChild;
// lastItem.id = "last-item";
lastItem.setAttribute("id", "last-item");

let attr = document.createAttribute("title");

attr.value = "I am Title";
lastItem.setAttributeNode(attr);
