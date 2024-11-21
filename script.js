document.querySelectorAll("#to").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const slider = document.querySelector(".img-slider");
let index = 0;
const images = document.querySelectorAll(".img-slider img");
const totalImages = images.length;

function moveToNextImage() {
  index = (index + 1) % totalImages;
  slider.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(moveToNextImage, 3000);

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});