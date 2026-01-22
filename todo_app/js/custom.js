"use strict";

let showText = document.querySelector(".show-text");
let input = document.querySelector("#input");
let addBtn = document.querySelector("#addBtn");
let orderLists = document.querySelector("#orderLists");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        showText.classList.add("show");
        return;
    }
    showText.classList.remove("show");

    let text = document.createTextNode(input.value);
    let li = document.createElement("li");
    li.appendChild(text);
    orderLists.appendChild(li);
    input.value = "";
});
