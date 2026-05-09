const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.querySelector('#moto'));
    observer.observe(document.querySelector('.summarize'));
});
