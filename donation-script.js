document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const centerNav = document.querySelector(".center-nav");

    if (!hamburger || !centerNav) {
        return;
    }

    hamburger.addEventListener("click", () => {

        centerNav.classList.toggle("active");

        const isOpen = centerNav.classList.contains("active");

        hamburger.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        hamburger.innerHTML = isOpen
            ? '<i class="ri-close-line"></i>'
            : '<i class="ri-menu-line"></i>';
    });


    /* Close menu after clicking a link */

    centerNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            centerNav.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburger.setAttribute(
                "aria-label",
                "Open menu"
            );

            hamburger.innerHTML =
                '<i class="ri-menu-line"></i>';
        });

    });

});
const form = document.querySelector('.newsletter-form');
let input=document.getElementById('mail-for-subscribe');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.value = '';
});