const options = {
    threshold: 0.25
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);



let hasStarted=false
const counter=document.getElementById('donation-received')
const counterObserver=new IntersectionObserver((entries)=>
{
    
    entries.forEach((entry)=>
    {
        
        if(entry.isIntersecting && !hasStarted)
        {
            hasStarted=true
            let count=0
            const target=300
            const timer=setInterval(()=>
                {
                    if(count>=target)
                    {
                        clearInterval(timer)
                        counterObserver.disconnect()
        
                    }
                    else
                    {
                        count++
                    }

                    counter.textContent=`${count}+`
                },10)
        }
    })
},options)


document.addEventListener("DOMContentLoaded", () => {
    animationObserver.observe(document.querySelector('#moto'));
    animationObserver.observe(document.querySelector('.summarize'));
    counterObserver.observe(document.querySelector('.leftside-leftpart-container'))
});

/* =========================================================
   HAMBURGER MENU
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");

    // IMPORTANT:
    // Your HTML uses class="center-nav", not id="centerNav"
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