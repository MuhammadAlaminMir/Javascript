//we can set event in html file with the help of js

let btn = document.getElementById("btn");

//un useful process to add event listener

// btn.onclick = function (e) {
//     console.log(e);
// };

let list = document.getElementById("list");

//add new list item with event listener

btn.addEventListener("click", function (e) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = "Newly Created Item";
    list.appendChild(item);
});

//remove list item

//Event Delegation Problem

// [...list.children].forEach((li) => {
//     li.onclick = function (e) {
//         e.target.remove();
//     };
// });

list.addEventListener("click", function (e) {
    if (this.contains(e.target)) {
        e.target.remove();
    }
});

//box

let box = document.getElementById("box");
box.addEventListener("mousemove", function (e) {
    document.getElementById("x-value"), (this.innerHTML = e.clientX);
    document.getElementById("y-value"), (this.innerHTML = e.clientY);
});
