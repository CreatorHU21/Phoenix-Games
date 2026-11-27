/* PHOENIX GAMES - LANGUAGE SYSTEM */

const translations = {
    hu: {
        home: "Főoldal",
        games: "Játékaink",
        economy: "Gazdaság",
        shop: "Shop",
        rules: "Szabályzat",
        community: "Közösség",
        ranks: "Rangrendszer",

        hero_description:
            "Egy közösség. Számtalan játék. Végtelen lehetőség.",

        join: "Csatlakozz hozzánk!",
        explore: "Fedezd fel a lehetőségeket!",

        view_games: "Játékok megtekintése",
        view_economy: "Gazdasági rendszer",
        view_shop: "Shop megnyitása",
        view_ranks: "Rangrendszer",
        view_rules: "Szabályzat megtekintése",
        view_community: "Közösség megtekintése",

        games_description:
            "Találd meg kedvenc játékodat, és keress magad mellé csapattársakat!",

        economy_description:
            "Szerezz PHX Coint, teljesíts különböző feladatokat, és építsd fel virtuális vagyonodat!",

        shop_description:
            "Vásárolj különleges rangokat, egyedi névszíneket és egyéb közösségi jutalmakat!",

        ranks_description:
            "Légy aktív a közösségben, gyűjts XP-t, és szerezz magasabb rangokat!",

        rules_description:
            "Ismerd meg a közösség szabályait, és segíts fenntartani a barátságos környezetet!",

        community_description:
            "Csatlakozz Discord-szerverünkhöz, ismerj meg új játékosokat, és kövess minket!"
    },

    en: {
        home: "Home",
        games: "Games",
        economy: "Economy",
        shop: "Shop",
        rules: "Rules",
        community: "Community",
        ranks: "Ranking System",

        hero_description:
            "One community. Countless games. Endless possibilities.",

        join: "Join us!",
        explore: "Explore the possibilities!",

        view_games: "View Games",
        view_economy: "Economy System",
        view_shop: "Open Shop",
        view_ranks: "Ranking System",
        view_rules: "View Rules",
        view_community: "View Community",

        games_description:
            "Find your favorite game and meet new teammates!",

        economy_description:
            "Earn PHX Coins, complete various tasks, and build your virtual wealth!",

        shop_description:
            "Purchase exclusive roles, custom name colors, and other community rewards!",

        ranks_description:
            "Stay active in the community, earn XP, and unlock higher ranks!",

        rules_description:
            "Learn the community rules and help maintain a friendly environment!",

        community_description:
            "Join our Discord server, meet new players, and follow us!"
    }
};

/* NYELVVÁLTÁS */

function setLanguage(language) {

    if (!translations[language]) {
        language = "hu";
    }

    document.documentElement.lang = language;

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.getAttribute("data-lang");

        if (translations[language][key] !== undefined) {
            element.textContent = translations[language][key];
        }

    });

    localStorage.setItem("phoenixLanguage", language);

    document.querySelectorAll("[data-language]").forEach(button => {

        const active = button.dataset.language === language;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

    });

}

/* NYELV BETÖLTÉSE */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-language]").forEach(button => {

        button.addEventListener("click", () => {
            setLanguage(button.dataset.language);
        });

    });

    const savedLanguage =
        localStorage.getItem("phoenixLanguage") || "hu";

    setLanguage(savedLanguage);

});
