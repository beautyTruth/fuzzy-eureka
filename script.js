// begin slideshow script
const changingDivs = () => {
  for (i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

changingDivs();

const sharks = document.querySelectorAll(".slideshow div");

let a = 1;

const darkKnight = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    if (a < sharks.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      sharks[0].classList.add("change");
      a = 1;
    }
  }, 7000);
};

darkKnight();
// end slideshow script
