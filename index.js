const carousel = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel_container");
const carouselImages = [
  "/imgs/car-ph.jpg",
  "/imgs/carousel-img1.png",
  "/imgs/carousel-img2.png",
  "/imgs/carousel-img3.png",
];
let currentImageIndex = 0;

function updateCarousel() {
  carousel.style.backgroundImage = `url('${carouselImages[currentImageIndex]}')`;
  carouselContainer.innerHTML = "";
  carouselImages.forEach((imageUrl, index) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = `Image ${index + 1}`;
    image.classList.add("carousel_image");
    if (index === currentImageIndex) {
      image.classList.add("active");
    }
    image.addEventListener("click", () => {
      currentImageIndex = index;
      updateCarousel();
    });
    carouselContainer.appendChild(image);
  });
}

updateCarousel();

document.querySelector(".left-button").addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
});

document.querySelector(".right-button").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  updateCarousel();
});
