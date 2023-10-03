const nextBtn = document.querySelector('.next-btn');
const preBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide'); // Use querySelectorAll to select all slides.
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active'); // Fix the typo here.
    });
    slideNumber++;
    if (slideNumber >= numberOfSlides) { // Change the condition to >=.
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
}

// Slider prev button
preBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active'); // Fix the typo here.
    });
    slideNumber--;
    if (slideNumber < 0) { // Change the condition to < 0.
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add('active');
}
