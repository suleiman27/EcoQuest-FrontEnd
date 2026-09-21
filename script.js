
// ======================================================
// ECOQUEST SAFARIS
// MAIN JAVASCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // CONFIG
    // ======================================================

    const API_BASE =
        "https://ecoquest-backend-r4d4.onrender.com/api";

    // ======================================================
    // AUTH CHECK
    // ======================================================

    // Public website does not require admin authentication.


    // ======================================================
    // HERO SLIDESHOW
    // ======================================================

    const slides =
        document.querySelectorAll(".hero-slideshow .slide");

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === index
            );

        });

    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }

    if (slides.length > 0) {

        showSlide(0);

        setInterval(nextSlide, 5000);

    }


    // ======================================================
    // MOBILE NAVIGATION
    // ======================================================

    const navToggle =
        document.getElementById("nav-toggle");

    const navLinks =
        document.getElementById("nav-links");

    if (navToggle && navLinks) {

        navToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const expanded =
                navToggle.getAttribute("aria-expanded") === "true";

            navToggle.setAttribute(
                "aria-expanded",
                !expanded
            );

        });

        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    navToggle.setAttribute(
                        "aria-expanded",
                        false
                    );

                });

            });

    }


    // ======================================================
    // MEGA MENU DESTINATIONS
    // ======================================================

    const destinationPopup =
        document.getElementById("destinationPopup");

    const destinationData = {

        mara: {

            title: "🦁 Masai Mara National Reserve",

            image: "images/Maasai Mara.jpeg",

            description:
                "Kenya's most iconic safari destination, famous for the Big Five, endless savannahs and the spectacular Great Wildebeest Migration."

        },

        amboseli: {

            title: "🐘 Amboseli National Park",

            image: "images/Amboseli.jpeg",

            description:
                "Renowned for giant elephant herds with breathtaking views of Mount Kilimanjaro, Africa's highest mountain."

        },

        tsavo: {

            title: "🌋 Tsavo National Parks",

            image: "images/Tsavo East.jpeg",

            description:
                "Kenya's largest protected ecosystem, famous for red elephants, lava fields, lions and dramatic landscapes."

        },

        samburu: {

            title: "🦒 Samburu National Reserve",

            image: "images/samburu.jpg",

            description:
                "A unique northern wilderness where you can spot the Samburu Special Five found nowhere else."

        },

        diani: {

            title: "🏖 Diani Beach",

            image: "images/diani.jpeg",

            description:
                "Relax on award-winning white sandy beaches, crystal-clear waters and luxurious beach resorts."

        },

        nairobi: {

            title: "🦏 Nairobi National Park",

            image: "images/nnp.jpeg",

            description:
                "The world's only national park bordering a capital city, offering lions, rhinos and giraffes."

        },

        lakeNakuru: {

            title: "🦩 Lake Nakuru National Park",

            image: "images/Lake Nakuru.jpeg",

            description:
                "Home to flamingos, endangered rhinos and spectacular Rift Valley scenery."

        }

    };


    // Update right panel when hovering

    document
        .querySelectorAll(".mega-links button")
        .forEach(button => {

            button.addEventListener("mouseenter", () => {

                const place =
                    destinationData[
                        button.dataset.destination
                    ];

                if (!place || !destinationPopup) return;

                destinationPopup.innerHTML = `

                    <img
                        src="${place.image}"
                        alt="${place.title}"
                    >

                    <h3>${place.title}</h3>

                    <p>
                        ${place.description}
                    </p>

                `;

            });

        });


    // Reset when leaving the entire mega menu

    const megaMenu =
        document.querySelector(".mega-menu");

    if (megaMenu && destinationPopup) {

        megaMenu.addEventListener(
            "mouseleave",
            () => {

                destinationPopup.innerHTML = `

                    <h3>🌍 EcoQuest Destinations</h3>

                    <p>
                        Hover over any destination on the left
                        to discover Kenya's most breathtaking
                        safari locations.
                    </p>

                `;

            }
        );

    }


    // ======================================================
    // DARK MODE
    // ======================================================

    const darkBtn =
        document.getElementById("dark-mode-toggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (darkBtn) {

            darkBtn.textContent = "☀️";

        }

    }

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            darkBtn.textContent =
                dark ? "☀️" : "🌙";

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

        });

    }


    // ======================================================
    // SCROLL REVEAL
    // ======================================================

    const reveals =
        document.querySelectorAll(
            ".fade-in,.fade-in-up"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    reveals.forEach(item =>
        observer.observe(item)
    );


    // ======================================================
    // FOOTER YEAR
    // ======================================================

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ======================================================
    // BOOKING FORM
    // ======================================================

    const citizenship =
        document.getElementById("citizenship");

    const idNumber =
        document.getElementById("idNumber");

    const passportNumber =
        document.getElementById("passportNumber");


    if (citizenship) {

        citizenship.addEventListener(
            "change",
            () => {

                if (idNumber) {

                    idNumber.style.display = "none";

                }

                if (passportNumber) {

                    passportNumber.style.display = "none";

                }


                if (
                    citizenship.value === "citizen" &&
                    idNumber
                ) {

                    idNumber.style.display = "block";

                }


                if (
                    citizenship.value === "non-citizen" &&
                    passportNumber
                ) {

                    passportNumber.style.display = "block";

                }

            }
        );

    }


    const bookingForm =
        document.getElementById("booking-form");


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            async e => {

                e.preventDefault();


                const formData =
                    new FormData(bookingForm);

                const data =
                    Object.fromEntries(
                        formData.entries()
                    );


                console.log(
                    "Booking data being sent:",
                    data
                );


                try {

                    const response =
                        await fetch(
                            `${API_BASE}/bookings`,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify(data)
                            }
                        );


                    const result =
                        await response.json();


                    console.log(
                        "Booking response:",
                        result
                    );


                    if (
                        response.ok &&
                        (
                            result.success ||
                            !result.error
                        )
                    ) {

                        alert(
                            "Your safari booking has been received. We will contact you shortly."
                        );


                        bookingForm.reset();


                        if (idNumber) {

                            idNumber.style.display =
                                "none";

                        }

                        if (passportNumber) {

                            passportNumber.style.display =
                                "none";

                        }

                    } else {

                        alert(
                            result.message ||
                            "Booking could not be completed."
                        );

                    }

                } catch (err) {

                    console.error(
                        "Booking Error:",
                        err
                    );


                    alert(
                        "Server unavailable. Please try again later."
                    );

                }

            }
        );

    }


    // ======================================================
    // CONTACT FORM
    // ======================================================

    const contactForm =
        document.getElementById("contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async e => {

                e.preventDefault();


                const data =
                    Object.fromEntries(
                        new FormData(
                            contactForm
                        ).entries()
                    );


                try {

                    const response =
                        await fetch(
                            `${API_BASE}/contact`,
