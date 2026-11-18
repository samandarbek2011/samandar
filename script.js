
// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".apple-navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(22, 22, 23, 0.97)";
    } else {
        navbar.style.background = "rgba(22, 22, 23, 0.88)";
    }
});


// =========================
// SCROLL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// =========================
// MOBILE NAVBAR
// =========================

const navLinks = document.querySelectorAll(".nav-link");
const navbarMenu = document.querySelector("#mainNav");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarMenu)
                .hide();
        }
    });
});


// =========================
// CAROUSEL
// =========================

const carouselElement = document.querySelector("#appleCarousel");

if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
        interval: 4500,
        pause: "hover",
        wrap: true,
        touch: true
    });
}


// =========================
// IMAGE FALLBACK
// =========================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function () {

        if (this.dataset.failed) return;

        this.dataset.failed = "true";

        const title = this.alt || "Product";

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="900" height="550">
                <defs>
                    <linearGradient id="bg" x1="0" y1="0"
                        x2="1" y2="1">
                        <stop offset="0%" stop-color="#eeeeee"/>
                        <stop offset="100%" stop-color="#cccccc"/>
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#bg)"/>
                <text x="50%" y="50%"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="42"
                    font-family="Arial"
                    fill="#555">${title}</text>
            </svg>
        `;

        this.src = "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(svg);
    });

});


// =========================
// FOOTER YEAR
// =========================

document.querySelector("#copyright").textContent =
    `Copyright © ${new Date().getFullYear()} Apple Style Demo.`;
