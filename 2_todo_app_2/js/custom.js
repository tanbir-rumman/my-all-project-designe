"use strict";

let input = document.querySelector("#input");
let addBtn = document.querySelector("#addBtn");
let alertSms = document.querySelector(".alertSms");
let orderList = document.querySelector("#order-List");

addBtn.addEventListener("click", () => {
    if (input.value === "") {
        alertSms.classList.add("show");
        return;
    }
    let list = document.createElement("li");
    list.textContent = input.value;

    orderList.appendChild(list);
    alertSms.classList.remove("show");
    input.value = "";
});
