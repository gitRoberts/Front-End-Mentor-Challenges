const id = document.querySelector("#id");
const advice = document.querySelector("#advice");
const button = document.querySelector("button");


button.addEventListener("click", function() {
    fetchData();
});

function fetchData() {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            updateDataFields(data);
        });
}

function updateDataFields(input) {
    id.textContent = "Advice #"+input.slip.id;
    advice.textContent = input.slip.advice;
}

