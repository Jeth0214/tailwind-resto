let burgerMenu = document.querySelector("#burgerMenu");
let navLinks = document.querySelector("#navLinks");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
