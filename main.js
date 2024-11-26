
import './less/hero.less';


//hero
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero__image");
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 3000); 
});
