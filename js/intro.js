let $$ = (sel) => document.querySelector(sel);

let firstName = $$("#fname")
let lastName = $$("#lname")
let username = $$("#user")
let phone = $$("#phone")
let city = $$("#city")
let email = $$("#email")
let form = $$("#form")

const requiredKeys = ["firstName", "lastName", "username", "phoneNumber", "city", "email"];
if (requiredKeys.every(key => localStorage.getItem(key))) {
    window.location.href = "game.html";
}


$.validator.addMethod("validFirstName", function(value) {
    return /^\D[\D\d\s'\-]{0,28}[\D\d]$/.test(value);
}, "First name is invalid");

$.validator.addMethod("validLastName", function(value) {
    return /^\D[\D\d\s'\-]{0,38}[\D\d]$/.test(value);
}, "Last name is invalid");

$.validator.addMethod("validUsername", function(value) {
    return /^[a-z][@#$%&]{3}[A-Z]\d$/.test(value);
}, "Username is invalid");

$.validator.addMethod("validPhone", function(value) {
    return /^1-\d\d\d-\d\d\d-\d\d\d\d$/.test(value);
}, "Phone is invalid");

$.validator.addMethod("validCity", function(value) {
    return /^\D{0,55}$/.test(value);
}, "City is invalid");

$("#form").validate({
    rules: {
        firstName: {
            required: true,
            validFirstName: true
        },
        lastName: {
            required: true,
            validLastName: true
        },
        username: {
            required: true,
            validUsername: true
        },
        phoneNumber: {
            required: true,
            validPhone: true
        },
        city: {
            required: true,
            validCity: true
        },
        email: {
            required: true,
            email: true
        }
    },
    errorPlacement: function(error, element) {
        error.addClass("errorClass");
        error.insertAfter(element);
    },
    highlight: function(element) {
        $(element).addClass("errorBox");
    },
    unhighlight: function(element) {
        $(element).removeClass("errorBox");
    },
    submitHandler: function() {
        setValues();
    }
});

function setValues() {
    if (firstName.value !== "" && lastName.value !== "" && username.value !== "" && phone.value !== "" && city.value !== "" && email.value !== "") {
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("phoneNumber", phone.value);
        localStorage.setItem("city", city.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("lastVisit", new Date().toUTCString());
        return true;
    }

    location.reload()
}