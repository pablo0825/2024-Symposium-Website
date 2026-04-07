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
