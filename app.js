document.addEventListener("DOMContentLoaded", function () {
  const brands = document.querySelectorAll(".brands > div");
  const dots = document.querySelectorAll(".dots > div");

  function hideAllBrands() {
    if (brands) {
      brands.forEach((brand) => {
        brand.style.display = "none";
      });
    }
  }

  function showDefaultBrands() {
    if (brands) {
      brands.forEach((brand) => {
        brand.style.display = "block";
      });
    }
  }

  function applyCarousel(dotIndex) {
    hideAllBrands();
    if (brands) {
      let startIndex = 0;
      switch (dotIndex) {
        case 0:
          startIndex = 0;
          break;
        case 1:
          startIndex = 1;
          break;
        case 2:
          startIndex = 2;
          break;
        default:
          startIndex = 0;
          break;
      }
      for (let i = startIndex; i < startIndex + 3 && i < brands.length; i++) {
        brands[i].style.display = "block";
      }
    }
  }

  function resetDotStyles() {
    if (dots) {
      dots.forEach((dot) => {
        dot.style.backgroundImage = "url('/imgs/grey-dot.png')";
      });
    }
  }

  if (dots) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        applyCarousel(index);
        resetDotStyles();
        dot.style.backgroundImage = "url('/imgs/black-dot.png')";
      });
    });
  }

  function updateCarousel() {
    const screenWidth = window.innerWidth;
    hideAllBrands();

    switch (true) {
      case screenWidth < 1030:
        applyCarousel(1);
        break;
      default:
        showDefaultBrands();
        break;
    }
  }

  updateCarousel();

  window.addEventListener("resize", function () {
    updateCarousel();
  });
});
