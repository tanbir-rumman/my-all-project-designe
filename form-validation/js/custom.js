"use strict";

let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let genderValue = document.querySelector(".genderValue");
let checkValue = document.querySelector(".checkValue");
let optionSelect = document.querySelector("#optionSelect");
let WirteTex = document.querySelector("#WirteTex");
let makeOpt = document.querySelector("#makeOpt");
let addBtn = document.querySelector("#addBtn");
let remove = document.querySelector("#remove");

// EVENT HANDLING
form.addEventListener("submit", formValidation);

// CHECK ERROR
function errorSHow(input, messgae) {
    let formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("success");
    let small = formControl.querySelector("small");
    small.textContent = messgae;
}

// CHECK SUCCESS
function successShow(input) {
    let formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
}

//CHECK INPUT VALID
function checkInputValid(inputArray) {
    inputArray.forEach((input) => {
        if (input.value === "") {
            errorSHow(input, `${fieldName(input)} Is Required`);
            return;
        } else {
            successShow(input);
        }
    });
}

// CHECK LENGTH
function checkLength(input, min, max) {
    if (input.value.length < min) {
        errorSHow(input, `${fieldName(input)} less then min ${min} Carecter`);
    } else if (input.value.length > max) {
        errorSHow(input, `${fieldName(input)} less then max ${max} Carecter`);
    } else {
        successShow(input);
    }
}

// CHECK PASSWORD MATCH
function checkPassMatch(input1, input2) {
    if (input1.value === "") {
        errorSHow(input1, "Password Is Required");
        return;
    }

    if (input1.value !== input2.value) {
        errorSHow(input2, " Confirm Password Is Not Match");
    } else if (input2.value === "") {
        errorSHow(input2, "Confirm Password Is Required");
    } else {
        successShow(input2);
    }
}

//CHECK EMAIL
function checkEmailValid(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(input.value.trim())) {
        successShow(input);
    } else if (input.value === "") {
        errorSHow(input, "Email Is Required");
    } else {
        errorSHow(input, "Enter A Valid Email");
    }
}

// CHECK GENDER SELECT
function selectGender(gender) {
    return document.querySelector(`input[name="${gender}"]:checked`);
}

// CHECK GENDER VALID
function checkGender() {
    let genderVal = selectGender("gender");
    if (!genderVal) {
        genderValue.classList.add("show");
        return;
    }
    genderValue.classList.add("show");
    genderValue.textContent = genderVal.value;
    genderValue.style.color = "#000";
}

// CHECK CHECKBOX SELECT

function checkBoxSelect() {
    let checkBox = document.querySelectorAll(`input[name="color"]:checked`);
    let checkVall = [];
    checkBox.forEach((box) => {
        checkVall.push(box.value);
    });
    return checkVall;
}

//CHECK CHECKBOX VALID
function checkCheckBox() {
    let inValue = checkBoxSelect();
    if (inValue.length == 0) {
        checkValue.classList.add("show");
        return;
    }

    checkValue.classList.add("show");
    checkValue.textContent = inValue.join(",");
    checkValue.style.color = "#000";
}

// LANGUAGE SELECT
let select = optionSelect;
function selecLanguage() {
    let language = select.value;
    console.log(language);
}

// CHECK MAKE NEW OPTION
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (WirteTex.value === "") {
        alert("Text Somthin");
    }

    let option = new Option(WirteTex.value);
    makeOpt.add(option);
    WirteTex.value = "";
});

// CHECK FIELD NAME
function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// DECLEAR ALL FUNCTION
function formValidation(e) {
    e.preventDefault();
    checkInputValid([firstName, lastName, email, password, password2]);
    checkLength(firstName, 2, 20);
    checkLength(lastName, 2, 20);
    checkLength(password, 6, 25);
    checkLength(password2, 6, 25);
    checkPassMatch(password, password2);
    checkEmailValid(email);
    checkGender();
    checkCheckBox();
    selecLanguage();
}

// CHECK REMOVE OPTION
remove.addEventListener("click", (e) => {
    e.preventDefault();
    let newArray = [];
    for (let i = 0; i < makeOpt.options.length; i++) {
        newArray[i] = makeOpt.options[i].selected;
    }

    let index = makeOpt.options.length;
    while (index--) {
        if (newArray[index]) {
            makeOpt.remove(index);
        }
    }
});
