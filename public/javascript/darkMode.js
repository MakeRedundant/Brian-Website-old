// Toggle dark mode
let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
const darkModeToggleNav = document.querySelector("#dark-mode-toggle-nav");
darkModeToggleNav.addEventListener("click", toggleDarkMode);
