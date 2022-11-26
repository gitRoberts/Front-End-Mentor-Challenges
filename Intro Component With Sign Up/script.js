const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkForValidField();
});

function checkForValidField() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        setErrorFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password);
    }
}

function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
}
