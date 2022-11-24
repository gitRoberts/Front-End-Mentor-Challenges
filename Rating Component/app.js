const mainContainer = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const buttons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit");
const actualRating = document.querySelector(".rating");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thankYou.classList.remove("hidden");
});

buttons.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML;
    })
})