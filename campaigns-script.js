const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".center-nav");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-line");
    } else {
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-line");
    }

});
const form = document.querySelector('.newsletter-form');
let input=document.getElementById('mail-for-subscribe');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.value = '';
});