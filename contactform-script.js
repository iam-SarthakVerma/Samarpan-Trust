

        /* ================= HAMBURGER ================= */

        const hamburger = document.getElementById("hamburger");
        const mainNav = document.getElementById("mainNav");

        hamburger.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            hamburger.setAttribute(
                "aria-expanded",
                isOpen
            );

            hamburger.innerHTML = isOpen
                ? '<i class="ri-close-line"></i>'
                : '<i class="ri-menu-line"></i>';

        });


        /* Close menu after clicking a link */

        document
            .querySelectorAll(".center-nav a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    mainNav.classList.remove("active");

                    hamburger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    hamburger.innerHTML =
                        '<i class="ri-menu-line"></i>';

                });

            });


        /* ================= CONTACT FORM ================= */

        const contactForm =
            document.getElementById("contactForm");

        const successMessage =
            document.getElementById("successMessage");


        contactForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const submitButton =
                document.getElementById("submit");

            const originalContent =
                submitButton.innerHTML;

            submitButton.disabled = true;

            submitButton.innerHTML =
                '<i class="ri-loader-4-line"></i> Sending...';


            try {

                const formData =
                    new FormData(contactForm);


                const response =
                    await fetch(contactForm.action, {

                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept": "application/json"
                        }

                    });


                if (response.ok) {

                    contactForm.style.display = "none";

                    successMessage.classList.add("show");

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    contactForm.reset();

                } else {

                    throw new Error(
                        "Unable to send message"
                    );

                }

            } catch (error) {

                alert(
                    "Unable to send your message right now. Please try again."
                );

                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalContent;

            }

        });

