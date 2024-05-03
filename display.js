function handleMediaQuery(mediaQuery) {
  const detailsFlexItems = document.querySelectorAll(".editional");
  if (mediaQuery.matches) {
    detailsFlexItems.forEach((item) => {
      item.classList.remove("none");
    });
  } else {
    detailsFlexItems.forEach((item) => {
      item.classList.add("none");
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 850px)");
  handleMediaQuery(mediaQuery);

  mediaQuery.addEventListener("change", (event) => {
    handleMediaQuery(event.target);
  });

  window.addEventListener("resize", () => {
    handleMediaQuery(mediaQuery);
  });
});
