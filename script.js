let body = document.querySelector("body");
let menuIcon = document.querySelector(".bi-list");
let navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("display-md");
});
