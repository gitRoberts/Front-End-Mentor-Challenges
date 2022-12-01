let prevButton = document.querySelector(".left-btn");
let nextButton = document.querySelector(".right-btn");
let profileImageJohn = document.querySelector(".john-image");
let profileImageTanya = document.querySelector(".tanya-image");
let testimonial = document.querySelector("#testimonial");
let fullname = document.querySelector("#fullname");
let position = document.querySelector("#position-title");

function changeImage() {
    if(profileImageJohn.classList.contains("hidden")) {
        profileImageJohn.classList.remove("hidden");
        profileImageTanya.classList.add("hidden");
        changeTestimonial(true);
    } else {
        profileImageJohn.classList.add("hidden");
        profileImageTanya.classList.remove("hidden");
        changeTestimonial(false);
    }
}

function changeTestimonial(input) {
    if(input) {
        testimonial.textContent = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        fullname.textContent = "John Tarkpor";
        position.textContent = "Junior Front-end Developer";
    } else {
        testimonial.textContent = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
        fullname.textContent = "Tanya Sinclair";
        position.textContent = "UX Engineer";
    }
}

prevButton.addEventListener("click", changeImage);
nextButton.addEventListener("click", changeImage);