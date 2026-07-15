const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

const updateHeader = () => header.classList.toggle("active", window.scrollY > 40);

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const closeMenu = () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll('.menu a, a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
    revealObserver.observe(element);
});
