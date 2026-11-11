// Zest & Root — landing page behavior (plain JavaScript, no libraries)

// ---- Mobile menu ----
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navMenu.classList.toggle("isOpen", open);
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });
  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("isOpen")) {
      setMenu(false);
      navToggle.focus();
    }
  });
}

// ---- Concept-only newsletter form (nothing is sent anywhere) ----
const notifyForm = document.getElementById("notifyForm");
const notifyMsg = document.getElementById("notifyMsg");
if (notifyForm && notifyMsg) {
  notifyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    notifyMsg.textContent = "Thanks! This is a concept page, so nothing was saved or sent.";
    notifyForm.reset();
  });
}
