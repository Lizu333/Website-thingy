"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeLanguage();
    initializeMobileMenu();
    initializeSearch();
    highlightActiveNavigation();
});

let language = localStorage.getItem("language") || "en";

/*THEME*/

function initializeTheme() {
    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) {
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateThemeAccessibility(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";

        localStorage.setItem("theme", theme);
        updateThemeAccessibility(themeButton);
    });
}

function updateThemeAccessibility(button) {
    const isDark = document.body.classList.contains("dark-theme");

    button.setAttribute(
        "aria-label",
        isDark
            ? "Világos mód bekapcsolása"
            : "Sötét mód bekapcsolása"
    );
}


/*LANGUAGE*/

const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",

        "hero-title": "Hi,\nI'm Lizu!",
        "hero-description": "I enjoy coding and building software, creating websites and crocheting.",
        "hero-about-button": "About Me",
        "hero-projects-button": "My Projects",

        "badge-programming": "Programming",
        "badge-crochet": "Crocheting",
        "badge-music": "Music",

        "quick-about-label": "About Me",
        "quick-about-title": "A little more about me",
        "quick-about-text": "My name is Lilla, although my friends usually call me Liza or Lizu. \nI am currently studying software engineering in high school.",
        "read-more": "Read more →",

        "featured-project-label": "Featured Project",
        "featured-project-title": "Something I'm building...",
        "featured-project-description": "A chess mini game written in C++ using SFML, with a separate \ngame engine and graphical interface.",
        "view-projects": "View projects",

        "latest-music-label": "Latest Music",
        "latest-music-title": "A few of my favorite songs",
        "view-all-music": "View all music"
    },

    hu: {
        "nav-home": "Főoldal",
        "nav-about": "Rólam",
        "nav-skills": "Készségek",
        "nav-projects": "Projektjeim",
        "nav-contact": "Kapcsolat",

        "hero-title": "Szia,\nLizu vagyok!",
        "hero-description": "Szeretek programozni és weboldalakat készíteni, évek óta hobbim a horgolás.",
        "hero-about-button": "Rólam",
        "hero-projects-button": "Projektjeim",

        "badge-programming": "Programozás",
        "badge-crochet": "Horgolás",
        "badge-music": "Zene",

        "quick-about-label": "Rólam",
        "quick-about-title": "Egy kicsit bővebben rólam",
        "quick-about-text": "Lillának hívnak, bár a barátaim általában Lizának vagy Lizunak hívnak. \nJelenleg középiskolában tanulok szoftverfejlesztést, hobbiként szívesen foglalkozom webfejlesztéssel.",
        "read-more": "Tovább →",

        "featured-project-label": "Kiemelt projekt",
        "featured-project-title": "Amin jelenleg dolgozom...",
        "featured-project-description": "Egy C++ nyelven, SFML használatával készülő sakkjáték, külön \njátékmotorral és grafikus felülettel.",
        "view-projects": "Projektjeim megtekintése",

        "latest-music-label": "Zenék",
        "latest-music-title": "Néhány kedvenc dalom",
        "view-all-music": "Összes zene"
    }
};

function initializeLanguage() {
    const languageButton = document.getElementById("language-toggle");

    if (!languageButton) {
        return;
    }

    let language = localStorage.getItem("language") || "en";

    applyLanguage(language, languageButton);

    languageButton.addEventListener("click", () => {
        language = language === "en" ? "hu" : "en";

        localStorage.setItem("language", language);
        applyLanguage(language, languageButton);
    });
}

function applyLanguage(language, button) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.dataset.lang;
        const translatedText = translations[language]?.[key];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    button.textContent = language === "en"
        ? "HU | EN"
        : "EN | HU";
}


/*MOBILE MENU*/

function initializeMobileMenu() {
    const openButton = document.getElementById("menu-toggle");
    const closeButton = document.getElementById("menu-close");
    const menu = document.getElementById("mobile-menu");

    if (!openButton || !menu) {
        return;
    }

    const openMenu = () => {
        menu.classList.add("open");
        document.body.classList.add("menu-open");

        menu.setAttribute("aria-hidden", "false");
        openButton.setAttribute("aria-expanded", "true");

        closeButton?.focus();
    };

    const closeMenu = () => {
        menu.classList.remove("open");
        document.body.classList.remove("menu-open");

        menu.setAttribute("aria-hidden", "true");
        openButton.setAttribute("aria-expanded", "false");
    };

    openButton.addEventListener("click", openMenu);
    closeButton?.addEventListener("click", closeMenu);

    menu.addEventListener("click", (event) => {
        if (event.target === menu) {
            closeMenu();
        }
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}


/*SEARCH DATA*/

const searchItems = [
    {
        title: "Home",
        description: "Főoldal",
        url: "index.html",
        keywords: ["home", "főoldal", "lizu"]
    },
    {
        title: "About",
        description: "Rólam és a hobbijaimról",
        url: "about.html",
        keywords: ["about", "rólam", "lilla", "lizu"]
    },
    {
        title: "Skills",
        description: "Programozási készségek",
        url: "skills.html",
        keywords: ["skills", "készségek", "programming", "programozás"]
    },
    {
        title: "Projects",
        description: "Programozási projektjeim",
        url: "projects.html",
        keywords: ["projects", "projektek", "programozás"]
    },
    {
        title: "Music",
        description: "Kedvenc dalaim",
        url: "music/music.html",
        keywords: ["music", "zene", "songs", "dalok", "dal", "zenék"]
    },
    {
        title: "Contact",
        description: "Kapcsolat és közösségi oldalak",
        url: "contact.html",
        keywords: ["contact", "kapcsolat", "github", "instagram", "youtube", "spotify"]
    },
    {
        title: "teenage dream",
        description: "Olivia Rodrigo",
        url: "music/teenagedream.html",
        keywords: ["teenage dream", "olivia rodrigo", "guts"]
    },
    {
        title: "u+me=<3",
        description: "Olivia Rodrigo",
        url: "music/uandme.html",
        keywords: ["u", "olivia", "rodrigo", "me"]
    }
];


/*SEARCH*/

function initializeSearch() {
    const wrapper = document.getElementById("search-wrapper");
    const toggle = document.getElementById("search-toggle");
    const input = document.getElementById("site-search");
    const results = document.getElementById("search-results");

    if (!wrapper || !toggle || !input || !results) {
        return;
    }

    const openSearch = () => {
        wrapper.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");

        window.setTimeout(() => input.focus(), 100);
    };

    const closeSearch = () => {
        wrapper.classList.remove("open");
        results.classList.remove("visible");

        toggle.setAttribute("aria-expanded", "false");

        input.value = "";
        results.innerHTML = "";
    };

    toggle.addEventListener("click", () => {
        if (wrapper.classList.contains("open")) {
            if (input.value.trim() === "") {
                closeSearch();
            } else {
                input.focus();
            }
        } else {
            openSearch();
        }
    });

    input.addEventListener("input", () => {
        renderSearchResults(input.value, results);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSearch();
            toggle.focus();
        }
    });

    document.addEventListener("click", (event) => {
        if (!wrapper.contains(event.target)) {
            closeSearch();
        }
    });
}

function renderSearchResults(query, resultsContainer) {
    const normalizedQuery = query
        .trim()
        .toLocaleLowerCase("hu-HU");

    if (normalizedQuery.length < 2) {
        resultsContainer.classList.remove("visible");
        resultsContainer.innerHTML = "";
        return;
    }

    const matches = searchItems.filter((item) => {
        const searchableText = [
            item.title,
            item.description,
            ...item.keywords
        ]
            .join(" ")
            .toLocaleLowerCase("hu-HU");

        return searchableText.includes(normalizedQuery);
    });

    resultsContainer.innerHTML = "";

    if (matches.length === 0) {
        resultsContainer.innerHTML = `
            <p class="search-empty">
                Nincs találat.
            </p>
        `;

        resultsContainer.classList.add("visible");
        return;
    }

    matches.forEach((item) => {
        const result = document.createElement("a");

        result.className = "search-result";
        result.href = item.url;

        result.innerHTML = `
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.description)}</span>
        `;

        resultsContainer.appendChild(result);
    });

    resultsContainer.classList.add("visible");
}


/*ACTIVE NAVIGATION*/

function highlightActiveNavigation() {
    const currentFile =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(
        ".desktop-nav a, .mobile-navigation a"
    ).forEach((link) => {
        const linkFile = link
            .getAttribute("href")
            ?.split("/")
            .pop();

        if (linkFile === currentFile) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}


/*SAFE HTML*/

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}