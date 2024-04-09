let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none'; // Hide all slides
    });
    slides[n].style.display = 'block'; // Show the current slide
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initially start the slideshow
showSlide(currentSlide);

// Automatically proceed to the next slide after 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);
