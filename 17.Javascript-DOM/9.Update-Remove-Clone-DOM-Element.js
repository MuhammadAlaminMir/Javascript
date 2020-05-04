//Updating the element

//update the fast element

let firstChild = list.firstElementChild;

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + " modified";
    firstChild.classList.add("text-danger"); //bootstrap
    firstChild.style.background = "green"; //normal css
}, 5000);

//removing the last element

setTimeout(() => {
    list.lastChild.remove();
}, 3000);

//clone node
//for copy use cloneNOde
//for copy and paste cloneNode(true)

let lastItem = list.lastElementChild.cloneNode();

lastItem.innerHTML = "Five";
list.appendChild(lastItem);
