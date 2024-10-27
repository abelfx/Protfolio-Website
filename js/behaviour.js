document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("heading1").addEventListener("click", (e) => {
    e.preventDefault();

    const heading1 = document.getElementById("heading1");
    const headign2 = document.getElementById("heading2");
    heading1.classList.toggle("active");
    headign2.classList.toggle("active");
    console.log("script is functional");
    const images1 = document.getElementById("images1");
    const images2 = document.getElementById("images2");

    images1.style.display = "block";
    images2.style.display = "none";
  });

  document.getElementById("heading2").addEventListener("click", (e) => {
    e.preventDefault();
    const images1 = document.getElementById("images1");
    const images2 = document.getElementById("images2");

    const heading1 = document.getElementById("heading1");
    const headign2 = document.getElementById("heading2");
    heading1.classList.toggle("active");
    headign2.classList.toggle("active");

    images1.style.display = "none";
    images2.style.display = "block";
  });

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
