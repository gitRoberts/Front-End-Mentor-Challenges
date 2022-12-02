let prevButton = document.querySelector(".left-btn");
let nextButton = document.querySelector(".right-btn");
let profileImage = document.querySelector(".primary-image");
let testimonial = document.querySelector("#testimonial");
let fullname = document.querySelector("#fullname");
let position = document.querySelector("#position-title");
let people;
let index = 0;

async function getData() {
    let response = await fetch("./data.json");
    let data = await response.json();
    people = data;
    draw(index);
}

function draw(input) {
    profileImage.src = `${people[input].img}`;
    fullname.textContent = `${people[input].name}`;
    position.textContent = `${people[input].occupation}`;
    testimonial.textContent = `" ${people[input].testimonial} "`;
}

prevButton.addEventListener("click", () => {
    if(index < 0 ) {
        index = people.length - 1;
    } else if(index > people.length - 1) {
        index = 0;
    } 
    draw(index--);
});
nextButton.addEventListener("click", () => {
    if(index > people.length - 1) {
        index = 0;
    }
    draw(index++);
});

getData();