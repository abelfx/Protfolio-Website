document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobilemenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobilemenu.classList.toggle("active")
  );

  const navLinks = document.querySelectorAll(".nav-link a");

  const currentLink = window.location.href;

  navLinks.forEach((link) => {
    if (link.href === currentLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
