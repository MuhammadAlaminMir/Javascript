//Every Element have their own style object
//we can change any inline style with DOM

let title = document.getElementById("title");

title.style.color = "#fff";
title.style.fontSize = "2rem";
title.style.background = "#000";

//we have an advanced solution . make an Object and set it

let styleObj = {
    background: "black",
    fontSize: "30px",
    color: "rad",
};

let list = document.getElementById("list");

[...list.children].forEach((li) => Object.assign(li.style, styleObj));

Object.assign(list.style, styleObj);
