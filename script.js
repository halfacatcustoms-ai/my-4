const brand = document.querySelector(".brand");
const revealPage = document.querySelector(".reveal-page");
const revealContent = document.querySelector(".reveal-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight * 1.6;

  const progress = Math.min(scrollY / maxScroll, 1);

  const scale = 1 + progress * 13;
  brand.style.setProperty("--scale", scale);

  if (progress < 0.5) {
    brand.style.opacity = 1;
  } else {
    brand.style.opacity = 1 - (progress - 0.5) * 2;
  }

  const circle = progress * 160;
  revealPage.style.setProperty("--circle", `${circle}%`);

  const contentOpacity = progress > 0.45 ? (progress - 0.45) / 0.35 : 0;
  revealContent.style.setProperty("--contentOpacity", Math.min(contentOpacity, 1));

  const contentMove = 40 - progress * 40;
  revealContent.style.setProperty("--contentMove", `${contentMove}px`);
});
