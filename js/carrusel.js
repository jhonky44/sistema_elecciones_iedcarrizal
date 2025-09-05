let index = 0;
const slides = document.querySelectorAll(".carrusel img");

setInterval(() => {
    slides[index].style.display = "none";
    index =  (index + 1) % slides.length;
    slides[idex].style.display = "bloxk";
}, 3000);