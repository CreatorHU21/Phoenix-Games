const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
