// scripts/theme.js

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(mode) {
  root.setAttribute("data-theme", mode);
  localStorage.setItem("jireh-theme", mode);
}

const savedTheme = localStorage.getItem("jireh-theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});
