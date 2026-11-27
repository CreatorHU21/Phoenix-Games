/* PHOENIX GAMES - SCRIPT V2.0 */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    /* MOBIL NAVIGÁCIÓ */

    if (menuButton && menu) {

        function closeMenu() {
            menu.classList.remove("active");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Menü megnyitása");
        }

        function openMenu() {
            menu.classList.add("active");
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "Menü bezárása");
        }

        closeMenu();

        menuButton.addEventListener("click", () => {

            if (menu.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        /* MENÜPONTRA KATTINTÁS */

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", closeMenu);

        });

        /* KATTINTÁS A MENÜN KÍVÜL */

        document.addEventListener("click", event => {

            if (
                !menu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

        });

        /* ESC BILLENTYŰ */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                menu.classList.contains("active")
            ) {
                closeMenu();
                menuButton.focus();
            }

        });

        /* ABLAKMÉRET VÁLTOZÁSA */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                closeMenu();
            }

        });

    }

    /* AKTUÁLIS OLDAL KIJELÖLÉSE */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const linkPage =
            new URL(link.href).pathname.split("/").pop() || "index.html";

        if (linkPage === currentPage) {

            link.classList.add("current-page");
            link.setAttribute("aria-current", "page");

        } else {

            link.classList.remove("current-page");
            link.removeAttribute("aria-current");

        }

    });

});
