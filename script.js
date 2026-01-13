// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// Smooth scrolling (Already existed, kept as is)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Logic
const themeToggles = document.querySelectorAll(".theme-toggle");
const body = document.body;

// Check local storage or system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    body.setAttribute("data-theme", "dark");
    updateIcons("dark");
}

themeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
        const isDark = body.getAttribute("data-theme") === "dark";

        if (isDark) {
            body.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            updateIcons("light");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            updateIcons("dark");
        }
    });
});

function updateIcons(theme) {
    themeToggles.forEach(btn => {
        const icon = btn.querySelector("i");
        if (theme === "dark") {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}