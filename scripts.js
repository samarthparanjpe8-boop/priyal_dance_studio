const menuToggle = document.getElementById("menu-toggle");
const dropdown = document.getElementById("dropdown-menu");

menuToggle.addEventListener("click", () => {
dropdown.classList.toggle("active");
});