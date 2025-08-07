// scripts/lang.ts

import { translations } from "../translations/index.js";

type Lang = keyof typeof translations;

function applyLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("jireh-language", lang);

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n") as keyof typeof translations["en"];
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

const savedLang = (localStorage.getItem("jireh-language") as Lang) || "en";
applyLanguage(savedLang);

const menu = document.getElementById("language-menu")!;
const toggleBtn = document.getElementById("language-toggle-btn")!;

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.querySelectorAll<HTMLElement>(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang") as Lang;
    applyLanguage(selectedLang);
    menu.classList.add("hidden");
  });
});
