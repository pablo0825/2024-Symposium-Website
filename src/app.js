// Handle the expansion and closing of the action menu
const mobileMenuButtons = document.querySelectorAll(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcons = document.querySelectorAll(".menu-icon");
const closeIcons = document.querySelectorAll(".close-icon");
const body = document.body;

mobileMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isMenuHidden = mobileMenu.classList.contains("hidden");

    // Toggle menu visibility
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("block");

    // Disable or enable page scrolling
    body.style.overflow = isMenuHidden ? "hidden" : "";

    // Toggle menu icons visibility
    menuIcons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });

    // Toggle close icons visibility
    closeIcons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
  });
});

// Handling the expansion and collapse of submenus
const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menuId = button.getAttribute("data-toggle");
    const subMenu = document.getElementById(menuId);

    const arrowIcon = button.querySelector("i");

    // Toggle submenu display
    subMenu.classList.toggle("hidden");
    subMenu.classList.toggle("block");

    arrowIcon.classList.toggle("rotate-180");
  });
});

// Handle fixed menu
const mainMenu = document.getElementById("main-menu");
const stickyMenu = document.getElementById("sticky-menu");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      stickyMenu.classList.remove("hidden");
      stickyMenu.classList.add("block");
    } else {
      stickyMenu.classList.remove("block");
      stickyMenu.classList.add("hidden");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(mainMenu);

//處理固定行動選單
const mobileMenus = document.querySelector(".mobile-menu");
const headerHeight = 64;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  mobileMenus.style.top = `${scrollPosition + headerHeight}px`;
});
