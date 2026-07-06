console.log("main.js betöltve");

//szinmodok

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙";

        }

    });

}

//szep gorgetes

const moreButton = document.querySelector('a[href="#more"]');

if (moreButton) {

    moreButton.addEventListener("click", function (event) {

        event.preventDefault();

        document.querySelector("#more").scrollIntoView({
            behavior: "smooth"
        });

    });

}

//navbar aktivalt

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    const fileName = href.split("/").pop();

    if (fileName === currentPage) {

        link.classList.add("active");

    }

});

//animacio gorgetes

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(element => {

    observer.observe(element);

});

//nyelv valtas

const languageButton = document.getElementById("language-toggle");

const translations = {

    en: {

        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",

        "hero-hi": "Hi!",
        "hero-name": "I'm Lizu.",
        "hero-text": "A software engineer student, and also a professional crocheter.",
        "hero-more": "More",

        "home-title": "A little more about me:",
        "home-text": "This section will introduce you to my hobbies and interests.",

        //about

        "about-title": "About me:",
        "about-text1": "My name is Lilla (although my friends usually call me Liza or Lizu), I'm 16 years old and currently learning software engineering in high school.",
        "about-text2": "Besides programming, I enjoy web development and learning new things.",

        "crochet-title": "🧶 Crocheting",
        "crochet-text": "Read more about my crochet projects. →",

        "music-title": "💿 Music",
        "music-text": "Read more about my music interests. →",

        "photos-title": "📸 Photos",
        "photos-text": "Gallery of my favorite shots. →",

        "plans-title": "🪀 Future plans",
        "plans-text": "Read more about my future aspirations. →",

        //skills

        "skills-title": "My skills",
        "skills-text": "I have a solid foundation in programming with C languages.",
        "skills-knowledge": "My knowledge:",

        "skill-c": "C (Junior)",
        "skill-cpp": "C++ (Junior)",
        "skill-csharp": "C# (Junior)",
        "skill-python": "Python (Basic)",
        "skill-html": "HTML (Basic)",
        "skill-css": "CSS (Basic)",

        //projects
        "projects-title": "My projects",
        "projects-text": "I usually spend time making projects in C#, C++ and Python.",
        "projects-goals": "My goals:",
        "projects-goals-text": "My goal is to become a better programmer and learn more programming languages that I can use in my future career.",
        "projects-list-title": "Projects:",
        "projects-item1": "Console Applications (C#)",
        "projects-item2": "Websites (HTML, CSS, JavaScript)",
        "projects-item3": "Mini Games (Python)",

        //contact
        "contact-title": "My other sites & contact:",

        //music
        "music-title1": "My Favorite Songs",
        "music-text1": "Music has always been a huge inspiration for me. Here are some of the songs I never get tired of listening to.",
        "music-spotify": "More of my favorite songs →",

    },

    hu: {

        "nav-about": "Rólam",
        "nav-skills": "Készségek",
        "nav-projects": "Projektjeim",
        "nav-contact": "Kapcsolat",

        "hero-hi": "Szia!",
        "hero-name": "Lizu vagyok.",
        "hero-text": "Kezdő szoftverfejlesztő, és professzionális horgoló.",
        "hero-more": "Tudj meg többet",

        "home-title": "Kicsit többet rólam:",
        "home-text": "Ebben a részben többet megtudhatsz rólam és az érdeklődési köreimről.",

        "about-title": "Rólam:",
        "about-text1": "Lillának hívnak (bár a barátaim többnyire Lizának vagy Lizunak hívnak), 16 éves vagyok, és jelenleg középiskolában tanulok szoftverfejlesztést.",
        "about-text2": "A programozás mellett érdekel a webfejlesztés, valamint szeretek új dolgokat tanulni.",

        "crochet-title": "🧶 Horgolás",
        "crochet-text": "Tudj meg többet a horgolós projektjeimről. →",

        "music-title": "💿 Zene",
        "music-text": "Tudj meg többet a zenei érdeklődéseimről. →",

        "photos-title": "📸 Fotók",
        "photos-text": "Egy kisebb galéria a kedvenc pillanataimról. →",

        "plans-title": "🪀 Jövőbeli tervek",
        "plans-text": "Olvass a jövőbeli céljaimról. →",

        "skills-title": "Készségeim",
        "skills-text": "Stabil alapokkal rendelkezem főként C nyelveken való programozásból.",
        "skills-knowledge": "Ismereteim:",

        "skill-c": "C (Haladó)",
        "skill-cpp": "C++ (Haladó)",
        "skill-csharp": "C# (Haladó)",
        "skill-python": "Python (Alapfok)",
        "skill-html": "HTML (Alapfok)",
        "skill-css": "CSS (Alapfok)",

        "projects-title": "Projektjeim",
        "projects-text": "Többnyire C#, C++ és Python nyelven készítek projekteket.",
        "projects-goals": "Céljaim:",
        "projects-goals-text": "Legfőbb célom, hogy jobb programozóvá váljak, és még több programozási nyelvet sajátítsak el, amelyeket a jövőbeli karrierem során hasznosíthatok majd.",
        "projects-list-title": "Projektjeim:",
        "projects-item1": "Konzol alkalmazások (C#)",
        "projects-item2": "Weboldalak (HTML, CSS, JavaScript)",
        "projects-item3": "Kisebb játékok (Python)",

        "contact-title": "Egyéb oldalaim és elérhetőségeim:",

        "music-title1": "Kedvenc dalaim:",
        "music-text1": "Tudj meg többet a zenehallgatási szokásaimról.",
        "music-spotify": "Több a kedvenc dalaimból →",

    }

};

let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[lang][key]) {

            element.textContent = translations[lang][key];

        }

    });

    localStorage.setItem("language", lang);

    languageButton.textContent =
        lang === "en"
            ? "HU | EN"
            : "EN | HU";

}

if (languageButton) {

    setLanguage(currentLanguage);

    languageButton.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "en"
                ? "hu"
                : "en";

        setLanguage(currentLanguage);

    });

}

