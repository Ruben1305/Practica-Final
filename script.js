let index = 0;

function moveSlide(direction) {
  const slides = document.getElementById('IMG');
  const total = slides.children.length;
  index = (index + direction + total) % total;
  slides.style.transform = `translateX(-${index * 600}px)`;
}

setInterval(() => moveSlide(1), 3000);
