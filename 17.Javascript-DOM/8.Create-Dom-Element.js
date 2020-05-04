//Dom Manipulation

//without Function:
//let li = document.createElement("li");
// li.className = "list-group-item";
// li.setAttribute("title", "I am Forth item");
// li.innerHTML = "Four";

//Using Function:

let li2 = createElement("li", "list-group-item", "Four");

let list = document.getElementById("list");
list.appendChild(li2);

let p1 = createElement(
    "p",
    "lead",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
);

let p2 = createElement(
    "p",
    "lead",

    `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
);

let div = createElement("div", "container");
append(div, [p1, p2]);

//insert as we need
//we have 4 position
//1.beforebegin , 2. afterbegin, 3, beforeend , 4.afterend
list.insertAdjacentElement("afterend", div);

//for just insert element
// let container = document
//     .getElementsByClassName("container")[0]
//     .appendChild(div);

//Append function
function append(parent, children) {
    children.forEach((child) => {
        parent.appendChild(child);
    });
}

//Create Element function
function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHTML || "";
    tag.className = className || "";
    return tag;
}
