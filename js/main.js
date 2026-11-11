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

// ---- Scroll reveal ----
// Elements marked data-reveal fade up once as they enter the screen.
const revealItems = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!("IntersectionObserver" in window) || reduceMotion) {
  revealItems.forEach((item) => item.classList.add("isVisible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
}
