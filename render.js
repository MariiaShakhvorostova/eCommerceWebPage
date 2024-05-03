function render(title, iconIndex) {
  return `
      <div class="item">
        <div class="icon-top${iconIndex}"></div>
        <div class="h-p">
          <p class="hh">${title}</p>
          <p class="pp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget
            ipsum et felis finibus consequat.
          </p>
        </div>
      </div>
      <div class="line"></div>
    `;
}

const titles = [
  "Ethically sourced.",
  "Responsibly made.",
  "Made for living in.",
  "Unimaginably comfortable.",
];

const topBenItems = document.querySelector(".top-ben-items");

titles.forEach((title, index) => {
  topBenItems.insertAdjacentHTML("beforeend", render(title, index + 1));

  const iconElement = topBenItems.querySelector(`.icon-top${index + 1}`);

  iconElement.style.backgroundImage = `url("/imgs/top-ben${index + 1}.png")`;
});
