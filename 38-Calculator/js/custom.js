"use strict";

function claculator(vuttonResult) {
    let result = document.getElementById("result");

    result.value += vuttonResult;
}

function deletMe() {
    let result = document.getElementById("result");

    result.value = "";
}

function evaluad() {
    let resultBox = document.getElementById("result");
    if (resultBox === "0") {
        return;
    }
    let value = resultBox.value;

    if (value === "") {
        return;
    }
    resultBox.value = eval(value);
}
