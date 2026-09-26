document.addEventListener("DOMContentLoaded", function () {

    const selector = document.getElementById("language-selector");

    if (!selector) {
        console.error("Language selector not found.");
        return;
    }

    const translations = {

        en: {
            home: "Home",
            packages: "Packages",
            gallery: "Gallery",
            about: "About",
            book: "Book",
            reviews: "Reviews",
            contact: "Contact"
        },

        es: {
            home: "Inicio",
            packages: "Paquetes",
            gallery: "Galería",
            about: "Nosotros",
            book: "Reservar",
            reviews: "Opiniones",
            contact: "Contacto"
        },

        fr: {
            home: "Accueil",
            packages: "Forfaits",
            gallery: "Galerie",
            about: "À propos",
            book: "Réserver",
            reviews: "Avis",
            contact: "Contact"
        },

        de: {
            home: "Startseite",
            packages: "Pakete",
            gallery: "Galerie",
            about: "Über uns",
            book: "Buchen",
            reviews: "Bewertungen",
            contact: "Kontakt"
        }

    };


    function translate(language) {

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key = element.dataset.i18n;

                if (
                    translations[language] &&
                    translations[language][key]
                ) {

                    element.textContent =
                        translations[language][key];

                }

            });

        document.documentElement.lang = language;

        localStorage.setItem(
            "ecoquestLanguage",
            language
        );

    }


    selector.addEventListener("change", function () {

        translate(this.value);

    });


    const savedLanguage =
        localStorage.getItem("ecoquestLanguage") || "en";

    selector.value = savedLanguage;

});
