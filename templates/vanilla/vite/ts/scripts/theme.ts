// scripts/theme.ts

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle")!;

function applyTheme(mode: "light" | "dark") {
  root.setAttribute("data-theme", mode);
  localStorage.setItem("jireh-theme", mode);
}

const savedTheme = (localStorage.getItem("jireh-theme") as "light" | "dark") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next as "light" | "dark");
});
