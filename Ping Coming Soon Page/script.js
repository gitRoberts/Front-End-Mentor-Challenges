const form = document.querySelector(".form");
const email = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkForValidation();
});

function checkForValidation() {
    const emailValue = email.value.trim();
    if(emailValue === '') {
        sendError();
    }
}

function sendError() {
    const formControl = email.parentElement;
    formControl.className = "form-control error";
}