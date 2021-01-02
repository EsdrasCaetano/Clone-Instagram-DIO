
let indexes = {current: 0};
let slides = document.getElementsByClassName('slideImg');
window.onload = slideImages();

function slideImages() {
    if (indexes.last) {
        slides[indexes.last].classList.remove('visible');
    }
    slides[indexes.current].classList.add('visible');

    indexes.last = indexes.current;
    indexes.current++;
    if (indexes.current >= slides.length) {
        indexes.current = 0;
    }

    setTimeout(slideImages, 3000);
}