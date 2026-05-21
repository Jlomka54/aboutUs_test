const navbar = document.querySelector(".navbar");
const burgerButton = document.querySelector(".burger-button");
const menuLinks = document.querySelectorAll(".nav-links a");
const desktopWidth = 1024;
let scrollPosition = 0;

const closeMenu = () => {
  if (!navbar.classList.contains("is-open")) {
    return;
  }

  navbar.classList.remove("is-open");
  burgerButton.classList.remove("is-open");
  burgerButton.setAttribute("aria-expanded", "false");
  burgerButton.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("left");
  document.body.style.removeProperty("right");
  document.body.style.removeProperty("width");
  document.body.style.removeProperty("overflow");
  window.scrollTo(0, scrollPosition);
};

const openMenu = () => {
  const pageWidth = document.documentElement.clientWidth;

  scrollPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = `${pageWidth}px`;
  document.body.style.overflow = "hidden";
  navbar.classList.add("is-open");
  burgerButton.classList.add("is-open");
  burgerButton.setAttribute("aria-expanded", "true");
  burgerButton.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
};

burgerButton.addEventListener("click", () => {
  if (navbar.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!navbar.classList.contains("is-open")) {
    return;
  }

  if (!navbar.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= desktopWidth) {
    closeMenu();
  }
});
