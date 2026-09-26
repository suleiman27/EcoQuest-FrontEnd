/* =========================================
   ECOQUEST SAFARIS
   MULTI-LANGUAGE SYSTEM
   English / Spanish / French / German
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const languageSelector =
        document.getElementById("language-selector");

    if (!languageSelector) {
        console.warn("Language selector not found.");
        return;
    }

    /* =========================================
       TRANSLATIONS
    ========================================= */

    const translations = {

        en: {

            "Home": "Home",
            "Destinations": "Destinations",
            "Packages": "Packages",
            "Gallery": "Gallery",
            "About": "About",
            "Book": "Book",
            "Reviews": "Reviews",
            "Contact": "Contact",

            "Book Your Safari": "Book Your Safari",
            "Get Free Quote": "Get Free Quote",

            "Trusted Kenyan Safari Experts":
                "Trusted Kenyan Safari Experts",

            "Explore Kenya's Wild Beauty With EcoQuest Safaris":
                "Explore Kenya's Wild Beauty With EcoQuest Safaris",

            "Experience unforgettable wildlife adventures, luxury lodges, breathtaking landscapes and personalized safari experiences designed by local experts.":
                "Experience unforgettable wildlife adventures, luxury lodges, breathtaking landscapes and personalized safari experiences designed by local experts.",

            "Happy Travellers":
                "Happy Travellers",

            "Years Experience":
                "Years Experience",

            "Our Safari Packages":
                "Our Safari Packages",

            "Handcrafted Safari Adventures":
                "Handcrafted Safari Adventures",

            "Whether you're visiting Kenya for the first time or returning for another adventure, we have carefully designed safari packages for every traveller.":
                "Whether you're visiting Kenya for the first time or returning for another adventure, we have carefully designed safari packages for every traveller.",

            "Tsavo West & Amboseli":
                "Tsavo West & Amboseli",

            "Discover volcanic landscapes, giant elephants and spectacular views of Mount Kilimanjaro.":
                "Discover volcanic landscapes, giant elephants and spectacular views of Mount Kilimanjaro.",

            "Tsavo East & Taita Hills":
                "Tsavo East & Taita Hills",

            "Experience Kenya's famous red elephants, Salt Lick Lodge and unforgettable game drives.":
                "Experience Kenya's famous red elephants, Salt Lick Lodge and unforgettable game drives.",

            "Tsavo West & Ngutuni":
                "Tsavo West & Ngutuni",

            "Explore lava fields, wildlife conservancies and exciting night game drives.":
                "Explore lava fields, wildlife conservancies and exciting night game drives.",

            "Maasai Mara Safari":
                "Maasai Mara Safari",

            "Witness the Big Five and the incredible Great Migration in Africa's most iconic reserve.":
                "Witness the Big Five and the incredible Great Migration in Africa's most iconic reserve.",

            "Samburu Adventure":
                "Samburu Adventure",

            "Discover northern Kenya and search for the unique Samburu Special Five.":
                "Discover northern Kenya and search for the unique Samburu Special Five.",

            "Book This Safari →":
                "Book This Safari →",

            "Top Destinations":
                "Top Destinations",

            "Explore Kenya's Most Beautiful Places":
                "Explore Kenya's Most Beautiful Places",

            "Home of the Great Migration and the Big Five.":
                "Home of the Great Migration and the Big Five.",

            "Famous for elephants and Mount Kilimanjaro views.":
                "Famous for elephants and Mount Kilimanjaro views.",

            "Kenya's largest national park with red elephants.":
                "Kenya's largest national park with red elephants.",

            "Wildlife just minutes from the capital city.":
                "Wildlife just minutes from the capital city.",

            "Rhinos, flamingos and breathtaking scenery.":
                "Rhinos, flamingos and breathtaking scenery.",

            "Why EcoQuest":
                "Why EcoQuest",

            "Why Travel With EcoQuest Safaris?":
                "Why Travel With EcoQuest Safaris?",

            "Experienced Guides":
                "Experienced Guides",

            "Passionate local professionals with years of safari experience.":
                "Passionate local professionals with years of safari experience.",

            "Luxury Accommodation":
                "Luxury Accommodation",

            "Carefully selected lodges and camps offering exceptional comfort.":
                "Carefully selected lodges and camps offering exceptional comfort.",

            "Tailor-Made Safaris":
                "Tailor-Made Safaris",

            "Every itinerary is customised to match your travel style and budget.":
                "Every itinerary is customised to match your travel style and budget.",

            "Sustainable Tourism":
                "Sustainable Tourism",

            "Supporting local communities while protecting Kenya's incredible wildlife.":
                "Supporting local communities while protecting Kenya's incredible wildlife.",

            "Gallery":
                "Gallery",

            "Moments Worth Remembering":
                "Moments Worth Remembering",

            "View Full Gallery →":
                "View Full Gallery →",

            "About EcoQuest":
                "About EcoQuest",

            "Passionate About Kenya, Dedicated To You":
                "Passionate About Kenya, Dedicated To You",

            "EcoQuest Safaris is a proudly Kenyan tour company committed to creating unforgettable wildlife adventures. From the iconic Maasai Mara to the breathtaking Amboseli plains, we help travellers experience Kenya through authentic, safe and personalized safari journeys.":
                "EcoQuest Safaris is a proudly Kenyan tour company committed to creating unforgettable wildlife adventures. From the iconic Maasai Mara to the breathtaking Amboseli plains, we help travellers experience Kenya through authentic, safe and personalized safari journeys.",

            "Every safari is carefully planned by experienced local experts to ensure comfort, safety and unforgettable encounters with Africa's magnificent wildlife.":
                "Every safari is carefully planned by experienced local experts to ensure comfort, safety and unforgettable encounters with Africa's magnificent wildlife.",

            "Licensed Safari Guides":
                "Licensed Safari Guides",

            "Luxury & Budget Packages":
                "Luxury & Budget Packages",

            "Custom Travel Planning":
                "Custom Travel Planning",

            "24/7 Customer Support":
                "24/7 Customer Support",

            "Your Adventure Starts Here":
                "Your Adventure Starts Here",

            "Begin Your Kenyan Safari":
                "Begin Your Kenyan Safari",

            "Discover breathtaking wildlife, luxury accommodation and unforgettable adventures with EcoQuest Safaris.":
                "Discover breathtaking wildlife, luxury accommodation and unforgettable adventures with EcoQuest Safaris.",

            "Book Your Safari":
                "Book Your Safari",

            "Complete the form below and one of our safari consultants will contact you shortly.":
                "Complete the form below and one of our safari consultants will contact you shortly.",

            "Full Name":
                "Full Name",

            "Email Address":
                "Email Address",

            "Phone / WhatsApp":
                "Phone / WhatsApp",

            "Number of Travellers":
                "Number of Travellers",

            "Select Destination":
                "Select Destination",

            "Budget":
                "Budget",

            "Mid Range":
                "Mid Range",

            "Luxury":
                "Luxury",

            "Citizenship":
                "Citizenship",

            "Kenyan Citizen":
                "Kenyan Citizen",

            "Non-Citizen":
                "Non-Citizen",

            "National ID":
                "National ID",

            "Passport Number":
                "Passport Number",

            "Special Requests":
                "Special Requests",

            "Book My Safari":
                "Book My Safari",

            "Secure Booking":
                "Secure Booking",

            "Tailor-Made Tours":
                "Tailor-Made Tours",

            "Fast Response":
                "Fast Response",

            "Customer Reviews":
                "Customer Reviews",

            "What Our Travellers Say":
                "What Our Travellers Say",

            "Read genuine experiences from guests who explored Kenya with EcoQuest Safaris.":
                "Read genuine experiences from guests who explored Kenya with EcoQuest Safaris.",

            "Reviews":
                "Reviews",

            "View All Reviews":
                "View All Reviews",

            "Share Your Experience":
                "Share Your Experience",

            "We'd love to hear about your safari adventure.":
                "We'd love to hear about your safari adventure.",

            "Name":
                "Name",

            "Country":
                "Country",

            "Rating":
                "Rating",

            "Review":
                "Review",

            "Submit Review":
                "Submit Review",

            "Contact Us":
                "Contact Us",

            "Let's Plan Your Dream Safari":
                "Let's Plan Your Dream Safari",

            "Have questions about our safari packages or need a customised itinerary? Send us a message and our team will get back to you as soon as possible.":
                "Have questions about our safari packages or need a customised itinerary? Send us a message and our team will get back to you as soon as possible.",

            "Location":
                "Location",

            "Phone":
                "Phone",

            "Email":
                "Email",

            "Your Name":
                "Your Name",

            "Your Email":
                "Your Email",

            "Subject":
                "Subject",

            "Your Message...":
                "Your Message...",

            "Send Message":
                "Send Message",

            "Quick Links":
                "Quick Links",

            "Safari Packages":
                "Safari Packages",

            "Book Safari":
                "Book Safari",

            "Contact":
                "Contact",

            "Payment Methods":
                "Payment Methods",

            "All Rights Reserved.":
                "All Rights Reserved."

        },

        /* =====================================
           SPANISH
        ===================================== */

        es: {

            "Home": "Inicio",
            "Destinations": "Destinos",
            "Packages": "Paquetes",
            "Gallery": "Galería",
            "About": "Nosotros",
            "Book": "Reservar",
            "Reviews": "Opiniones",
            "Contact": "Contacto",

            "Book Your Safari": "Reserva tu Safari",
            "Get Free Quote": "Obtén una Cotización Gratis",

            "Trusted Kenyan Safari Experts":
                "Expertos en Safaris de Kenia",

            "Explore Kenya's Wild Beauty With EcoQuest Safaris":
                "Explora la Belleza Natural de Kenia con EcoQuest Safaris",

            "Happy Travellers":
                "Viajeros Felices",

            "Years Experience":
                "Años de Experiencia",

            "Our Safari Packages":
                "Nuestros Paquetes de Safari",

            "Handcrafted Safari Adventures":
                "Aventuras de Safari Diseñadas para Ti",

            "Book This Safari →":
                "Reservar Este Safari →",

            "Top Destinations":
                "Principales Destinos",

            "Explore Kenya's Most Beautiful Places":
                "Explora los Lugares Más Hermosos de Kenia",

            "Why EcoQuest":
                "Por Qué EcoQuest",

            "Why Travel With EcoQuest Safaris?":
                "¿Por Qué Viajar con EcoQuest Safaris?",

            "Experienced Guides":
                "Guías Experimentados",

            "Luxury Accommodation":
                "Alojamiento de Lujo",

            "Tailor-Made Safaris":
                "Safaris Personalizados",

            "Sustainable Tourism":
                "Turismo Sostenible",

            "Gallery":
                "Galería",

            "Moments Worth Remembering":
                "Momentos para Recordar",

            "View Full Gallery →":
                "Ver Galería Completa →",

            "About EcoQuest":
                "Sobre EcoQuest",

            "Passionate About Kenya, Dedicated To You":
                "Apasionados por Kenia, Dedicados a Ti",

            "Licensed Safari Guides":
                "Guías de Safari con Licencia",

            "Luxury & Budget Packages":
                "Paquetes de Lujo y Económicos",

            "Custom Travel Planning":
                "Planificación de Viajes Personalizada",

            "24/7 Customer Support":
                "Atención al Cliente 24/7",

            "Your Adventure Starts Here":
                "Tu Aventura Comienza Aquí",

            "Begin Your Kenyan Safari":
                "Comienza tu Safari por Kenia",

            "Book Your Safari":
                "Reserva tu Safari",

            "Complete the form below and one of our safari consultants will contact you shortly.":
                "Completa el formulario y uno de nuestros consultores de safari se pondrá en contacto contigo pronto.",

            "Full Name":
                "Nombre Completo",

            "Email Address":
                "Correo Electrónico",

            "Phone / WhatsApp":
                "Teléfono / WhatsApp",

            "Number of Travellers":
                "Número de Viajeros",

            "Select Destination":
                "Seleccionar Destino",

            "Budget":
                "Presupuesto",

            "Mid Range":
                "Gama Media",

            "Luxury":
                "Lujo",

            "Citizenship":
                "Nacionalidad",

            "Kenyan Citizen":
                "Ciudadano Keniano",

            "Non-Citizen":
                "No Ciudadano",

            "National ID":
                "Documento Nacional de Identidad",

            "Passport Number":
                "Número de Pasaporte",

            "Special Requests":
                "Solicitudes Especiales",

            "Book My Safari":
                "Reservar Mi Safari",

            "Secure Booking":
                "Reserva Segura",

            "Tailor-Made Tours":
                "Tours Personalizados",

            "Fast Response":
                "Respuesta Rápida",

            "Customer Reviews":
                "Opiniones de Clientes",

            "What Our Travellers Say":
                "Lo Que Dicen Nuestros Viajeros",

            "View All Reviews":
                "Ver Todas las Opiniones",

            "Share Your Experience":
                "Comparte Tu Experiencia",

            "We'd love to hear about your safari adventure.":
                "Nos encantaría conocer tu experiencia de safari.",

            "Name":
                "Nombre",

            "Country":
                "País",

            "Rating":
                "Calificación",

            "Review":
                "Opinión",

            "Submit Review":
                "Enviar Opinión",

            "Contact Us":
                "Contáctanos",

            "Let's Plan Your Dream Safari":
                "Planifiquemos el Safari de Tus Sueños",

            "Location":
                "Ubicación",

            "Phone":
                "Teléfono",

            "Email":
                "Correo Electrónico",

            "Your Name":
                "Tu Nombre",

            "Your Email":
                "Tu Correo Electrónico",

            "Subject":
                "Asunto",

            "Your Message...":
                "Tu Mensaje...",

            "Send Message":
                "Enviar Mensaje",

            "Quick Links":
                "Enlaces Rápidos",

            "Safari Packages":
                "Paquetes de Safari",

            "Book Safari":
                "Reservar Safari",

            "Payment Methods":
                "Métodos de Pago",

            "All Rights Reserved.":
                "Todos los Derechos Reservados."

        },

        /* =====================================
           FRENCH
        ===================================== */

        fr: {

            "Home": "Accueil",
            "Destinations": "Destinations",
            "Packages": "Forfaits",
            "Gallery": "Galerie",
            "About": "À propos",
            "Book": "Réserver",
            "Reviews": "Avis",
            "Contact": "Contact",

            "Book Your Safari": "Réservez votre Safari",
            "Get Free Quote": "Obtenir un Devis Gratuit",

            "Trusted Kenyan Safari Experts":
                "Experts en Safaris au Kenya",

            "Explore Kenya's Wild Beauty With EcoQuest Safaris":
                "Découvrez la Beauté Sauvage du Kenya avec EcoQuest Safaris",

            "Happy Travellers":
                "Voyageurs Satisfaits",

            "Years Experience":
                "Années d'Expérience",

            "Our Safari Packages":
                "Nos Forfaits Safari",

            "Handcrafted Safari Adventures":
                "Aventures Safari Personnalisées",

            "Book This Safari →":
                "Réserver ce Safari →",

            "Top Destinations":
                "Meilleures Destinations",

            "Explore Kenya's Most Beautiful Places":
                "Découvrez les Plus Beaux Endroits du Kenya",

            "Why EcoQuest":
                "Pourquoi EcoQuest",

            "Why Travel With EcoQuest Safaris?":
                "Pourquoi Voyager avec EcoQuest Safaris ?",

            "Experienced Guides":
                "Guides Expérimentés",

            "Luxury Accommodation":
                "Hébergement de Luxe",

            "Tailor-Made Safaris":
                "Safaris Sur Mesure",

            "Sustainable Tourism":
                "Tourisme Durable",

            "Moments Worth Remembering":
                "Des Moments Inoubliables",

            "View Full Gallery →":
                "Voir Toute la Galerie →",

            "About EcoQuest":
                "À Propos d'EcoQuest",

            "Passionate About Kenya, Dedicated To You":
                "Passionnés par le Kenya, Dévoués à Vous",

            "Licensed Safari Guides":
                "Guides Safari Agréés",

            "Luxury & Budget Packages":
                "Forfaits Luxe et Économiques",

            "Custom Travel Planning":
                "Planification de Voyages Personnalisée",

            "24/7 Customer Support":
                "Assistance Client 24/7",

            "Your Adventure Starts Here":
                "Votre Aventure Commence Ici",

            "Begin Your Kenyan Safari":
                "Commencez Votre Safari au Kenya",

            "Book Your Safari":
                "Réservez Votre Safari",

            "Full Name":
                "Nom Complet",

            "Email Address":
                "Adresse E-mail",

            "Phone / WhatsApp":
                "Téléphone / WhatsApp",

            "Number of Travellers":
                "Nombre de Voyageurs",

            "Select Destination":
                "Sélectionner une Destination",

            "Budget":
                "Budget",

            "Mid Range":
                "Gamme Intermédiaire",

            "Luxury":
                "Luxe",

            "Citizenship":
                "Nationalité",

            "Kenyan Citizen":
                "Citoyen Kenyan",

            "Non-Citizen":
                "Non-Citoyen",

            "National ID":
                "Carte d'Identité Nationale",

            "Passport Number":
                "Numéro de Passeport",

            "Special Requests":
                "Demandes Spéciales",

            "Book My Safari":
                "Réserver Mon Safari",

            "Secure Booking":
                "Réservation Sécurisée",

            "Tailor-Made Tours":
                "Circuits Sur Mesure",

            "Fast Response":
                "Réponse Rapide",

            "Customer Reviews":
                "Avis des Clients",

            "What Our Travellers Say":
                "Ce Que Disent Nos Voyageurs",

            "View All Reviews":
                "Voir Tous les Avis",

            "Share Your Experience":
                "Partagez Votre Expérience",

            "We'd love to hear about your safari adventure.":
                "Nous aimerions connaître votre expérience de safari.",

            "Name":
                "Nom",

            "Country":
                "Pays",

            "Rating":
                "Évaluation",

            "Review":
                "Avis",

            "Submit Review":
                "Envoyer l'Avis",

            "Contact Us":
                "Contactez-Nous",

            "Let's Plan Your Dream Safari":
                "Planifions le Safari de Vos Rêves",

            "Location":
                "Lieu",

            "Phone":
                "Téléphone",

            "Email":
                "E-mail",

            "Your Name":
                "Votre Nom",

            "Your Email":
                "Votre E-mail",

            "Subject":
                "Objet",

            "Your Message...":
                "Votre Message...",

            "Send Message":
                "Envoyer le Message",

            "Quick Links":
                "Liens Rapides",

            "Safari Packages":
                "Forfaits Safari",

            "Book Safari":
                "Réserver un Safari",

            "Payment Methods":
                "Modes de Paiement",

            "All Rights Reserved.":
                "Tous Droits Réservés."

        },

        /* =====================================
           GERMAN
        ===================================== */

        de: {

            "Home": "Startseite",
            "Destinations": "Reiseziele",
            "Packages": "Pakete",
            "Gallery": "Galerie",
            "About": "Über Uns",
            "Book": "Buchen",
            "Reviews": "Bewertungen",
            "Contact": "Kontakt",

            "Book Your Safari": "Safari Buchen",
            "Get Free Quote": "Kostenloses Angebot",

            "Trusted Kenyan Safari Experts":
                "Vertrauenswürdige Kenianische Safari-Experten",

            "Explore Kenya's Wild Beauty With EcoQuest Safaris":
                "Entdecken Sie Kenias Wilde Schönheit mit EcoQuest Safaris",

            "Happy Travellers":
                "Zufriedene Reisende",

            "Years Experience":
                "Jahre Erfahrung",

            "Our Safari Packages":
                "Unsere Safari-Pakete",

            "Handcrafted Safari Adventures":
                "Individuell Gestaltete Safari-Abenteuer",

            "Book This Safari →":
                "Diese Safari Buchen →",

            "Top Destinations":
                "Top-Reiseziele",

            "Explore Kenya's Most Beautiful Places":
                "Entdecken Sie Kenias Schönste Orte",

            "Why EcoQuest":
                "Warum EcoQuest",

            "Why Travel With EcoQuest Safaris?":
                "Warum mit EcoQuest Safaris Reisen?",

            "Experienced Guides":
                "Erfahrene Guides",

            "Luxury Accommodation":
                "Luxusunterkünfte",

            "Tailor-Made Safaris":
                "Individuelle Safaris",

            "Sustainable Tourism":
                "Nachhaltiger Tourismus",

            "Moments Worth Remembering":
                "Unvergessliche Momente",

            "View Full Gallery →":
                "Gesamte Galerie Anzeigen →",

            "About EcoQuest":
                "Über EcoQuest",

            "Passionate About Kenya, Dedicated To You":
                "Mit Leidenschaft für Kenia, Für Sie Da",

            "Licensed Safari Guides":
                "Lizenzierte Safari-Guides",

            "Luxury & Budget Packages":
                "Luxus- und Budget-Pakete",

            "Custom Travel Planning":
                "Individuelle Reiseplanung",

            "24/7 Customer Support":
                "24/7 Kundenservice",

            "Your Adventure Starts Here":
                "Ihr Abenteuer Beginnt Hier",

            "Begin Your Kenyan Safari":
                "Beginnen Sie Ihre Kenia-Safari",

            "Book Your Safari":
                "Buchen Sie Ihre Safari",

            "Full Name":
                "Vollständiger Name",

            "Email Address":
                "E-Mail-Adresse",

            "Phone / WhatsApp":
                "Telefon / WhatsApp",

            "Number of Travellers":
                "Anzahl der Reisenden",

            "Select Destination":
                "Reiseziel Auswählen",

            "Budget":
                "Budget",

            "Mid Range":
                "Mittelklasse",

            "Luxury":
                "Luxus",

            "Citizenship":
                "Staatsangehörigkeit",

            "Kenyan Citizen":
                "Kenianischer Staatsbürger",

            "Non-Citizen":
                "Nicht-Staatsbürger",

            "National ID":
                "Personalausweis",

            "Passport Number":
                "Reisepassnummer",

            "Special Requests":
                "Besondere Wünsche",

            "Book My Safari":
                "Meine Safari Buchen",

            "Secure Booking":
                "Sichere Buchung",

            "Tailor-Made Tours":
                "Individuelle Reisen",

            "Fast Response":
                "Schnelle Antwort",

            "Customer Reviews":
                "Kundenbewertungen",

            "What Our Travellers Say":
                "Was Unsere Reisenden Sagen",

            "View All Reviews":
                "Alle Bewertungen Anzeigen",

            "Share Your Experience":
                "Teilen Sie Ihre Erfahrung",

            "We'd love to hear about your safari adventure.":
                "Wir würden gerne von Ihrem Safari-Abenteuer hören.",

            "Name":
                "Name",

            "Country":
                "Land",

            "Rating":
                "Bewertung",

            "Review":
                "Bewertung",

            "Submit Review":
                "Bewertung Absenden",

            "Contact Us":
                "Kontaktieren Sie Uns",

            "Let's Plan Your Dream Safari":
                "Planen Wir Ihre Traum-Safari",

            "Location":
                "Standort",

            "Phone":
                "Telefon",

            "Email":
                "E-Mail",

            "Your Name":
                "Ihr Name",

            "Your Email":
                "Ihre E-Mail",

            "Subject":
                "Betreff",

            "Your Message...":
                "Ihre Nachricht...",

            "Send Message":
                "Nachricht Senden",

            "Quick Links":
                "Schnelllinks",

            "Safari Packages":
                "Safari-Pakete",

            "Book Safari":
                "Safari Buchen",

            "Payment Methods":
                "Zahlungsmethoden",

            "All Rights Reserved.":
                "Alle Rechte Vorbehalten."

        }

    };


    /* =========================================
       NORMALIZE TEXT
    ========================================= */

    function normalizeText(text) {

        return text
            .replace(/\s+/g, " ")
            .trim();

    }


    /* =========================================
       TRANSLATE TEXT NODES
    ========================================= */

    function translatePage(language) {

        const dictionary = translations[language];

        if (!dictionary) {
            return;
        }

        /* Text nodes */

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null
        );

        const textNodes = [];

        while (walker.nextNode()) {

            textNodes.push(walker.currentNode);

        }

        textNodes.forEach(function (node) {

            const original =
                normalizeText(node.nodeValue);

            if (!original) {
                return;
            }

            if (dictionary[original]) {

                node.nodeValue =
                    node.nodeValue.replace(
                        original,
                        dictionary[original]
                    );

            }

        });


        /* Placeholders */

        document.querySelectorAll(
            "input[placeholder], textarea[placeholder]"
        ).forEach(function (element) {

            const original =
                normalizeText(element.getAttribute("placeholder"));

            if (dictionary[original]) {

                element.setAttribute(
                    "placeholder",
                    dictionary[original]
                );

            }

        });


        /* Select options */

        document.querySelectorAll("option").forEach(function (option) {

            const original =
                normalizeText(option.textContent);

            if (dictionary[original]) {

                option.textContent =
                    dictionary[original];

            }

        });


        /* Page language */

        document.documentElement.lang = language;

        /* Save language */

        localStorage.setItem(
            "ecoquestLanguage",
            language
        );

    }


    /* =========================================
       LANGUAGE CHANGE
    ========================================= */

    languageSelector.addEventListener(
        "change",
        function () {

            /*
             * Reloading ensures that we always translate
             * from the original English HTML.
             */

            localStorage.setItem(
                "ecoquestLanguage",
                this.value
            );

            location.reload();

        }
    );


    /* =========================================
       LOAD SAVED LANGUAGE
    ========================================= */

    const savedLanguage =
        localStorage.getItem("ecoquestLanguage") || "en";

    languageSelector.value = savedLanguage;

    if (savedLanguage !== "en") {

        translatePage(savedLanguage);

    }

});
