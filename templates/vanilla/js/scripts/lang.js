// scripts/lang.js

import { translations } from "../translations/index.js";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("jireh-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

// Init
const savedLang = localStorage.getItem("jireh-language") || "en";
applyLanguage(savedLang);

// Dropdown logic
const menu = document.getElementById("language-menu");
const toggleBtn = document.getElementById("language-toggle-btn");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang");
    applyLanguage(selectedLang);
    menu.classList.add("hidden");
  });
});
