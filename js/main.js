/*
 * E-Portfolio interactions
 * Vanilla JavaScript — no framework or external JS library required.
 */

document.addEventListener("DOMContentLoaded", () => {
    initMobileSidebar();
    initActiveNavigation();
    initLogbookAccordion();
    initLogbookSearch();
    initScrollReveal();
    initContactForm();
    initDownloadCV();
    initBackToTop();
    initCurrentYear();
});

/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function initMobileSidebar() {
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (!menuButton || !sidebar) return;

    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuButton.textContent = sidebar.classList.contains("open") ? "✕" : "☰";
        menuButton.setAttribute(
            "aria-label",
            sidebar.classList.contains("open") ? "Close menu" : "Open menu"
        );
    });

    document.querySelectorAll(".sidebar-nav a").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        });
    });
}

/* =========================================================
   ACTIVE SIDEBAR NAVIGATION
========================================================= */

function initActiveNavigation() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    if (!sections.length || !navLinks.length) return;

    const updateActiveLink = () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 150;

            if (window.scrollY >= top) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute("href") === `#${current}`;
            link.classList.toggle("active", isActive);
        });
    };

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();
}

/* =========================================================
   LOGBOOK ACCORDION
========================================================= */

function initLogbookAccordion() {
    const summaries = document.querySelectorAll(".logbook-summary");
    const entries = document.querySelectorAll(".logbook-entry");

    summaries.forEach(summary => {
        summary.setAttribute("role", "button");
        summary.setAttribute("tabindex", "0");

        const toggle = () => {
            const entry = summary.closest(".logbook-entry");
            if (!entry) return;

            entries.forEach(item => {
                if (item !== entry) {
                    item.classList.remove("open");
                }
            });

            entry.classList.toggle("open");
            summary.setAttribute("aria-expanded", entry.classList.contains("open"));
        };

        summary.addEventListener("click", toggle);

        summary.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggle();
            }
        });

        summary.setAttribute("aria-expanded", "false");
    });
}

/* =========================================================
   LOGBOOK SEARCH
========================================================= */

function initLogbookSearch() {
    const logSearch = document.getElementById("logSearch");
    const logEntries = document.querySelectorAll(".logbook-entry");

    if (!logSearch || !logEntries.length) return;

    logSearch.addEventListener("input", () => {
        const query = logSearch.value.toLowerCase().trim();

        logEntries.forEach(entry => {
            const searchableText = (entry.dataset.search || "").toLowerCase();
            entry.style.display = searchableText.includes(query) ? "" : "none";
        });
    });
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    revealElements.forEach(element => observer.observe(element));
}

/* =========================================================
   CONTACT FORM
========================================================= */

function initContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        alert(
            "Thank you for your message! " +
            "This is currently a demo form."
        );

        contactForm.reset();
    });
}

/* =========================================================
   DOWNLOAD CV
========================================================= */

function initDownloadCV() {
    const downloadButton = document.getElementById("downloadCvButton");

    if (!downloadButton) return;

    downloadButton.addEventListener("click", event => {
        event.preventDefault();

        alert(
            "Replace this button with your actual CV PDF file."
        );
    });
}

/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {
    const backTop = document.getElementById("backTop");

    if (!backTop) return;

    const updateVisibility = () => {
        backTop.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });

    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateVisibility();
}

/* =========================================================
   CURRENT YEAR
========================================================= */

function initCurrentYear() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
