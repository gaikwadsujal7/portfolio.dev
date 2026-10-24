gsap.registerPlugin(ScrollTrigger);


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");
const navLinks = document.querySelectorAll(".navbar__link");


if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll(
    "#hero, #projects, #services, #about, #contact"
);

const activeLinks = document.querySelectorAll(
    ".navbar__link"
);


if (sections.length && activeLinks.length) {

    const sectionObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const currentSection = entry.target.id;

                activeLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentSection}`
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* =========================================
   HERO ANIMATION
========================================= */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


heroTimeline

    .from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.7
    })

    .from(".hero__eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, "-=0.3")

    .from(".hero__title", {
        y: 70,
        opacity: 0,
        duration: 0.9
    }, "-=0.35")

    .from(".hero__description", {
        y: 30,
        opacity: 0,
        duration: 0.7
    }, "-=0.45")

    .from(".hero__actions", {
        y: 25,
        opacity: 0,
        duration: 0.6
    }, "-=0.35")

    .from(".hero__visual", {
        opacity: 0,
        duration: 0.8
    }, "-=0.4");


/* =========================================
   HERO VISUAL GLOW
========================================= */

const mm = gsap.matchMedia();


mm.add("(min-width: 769px)", () => {

    const glow = document.querySelector(
        ".hero__visual-glow"
    );

    if (!glow) return;


    gsap.fromTo(

        glow,

        {
            y: -60
        },

        {
            y: 240,
            duration: 2.2,
            ease: "none",
            repeat: -1,
            repeatDelay: 0.8
        }

    );

});


mm.add("(max-width: 768px)", () => {

    const glow = document.querySelector(
        ".hero__visual-glow"
    );

    if (!glow) return;


    gsap.fromTo(

        glow,

        {
            x: -80
        },

        {
            x: "100vw",
            duration: 2.2,
            ease: "none",
            repeat: -1,
            repeatDelay: 0.8
        }

    );

});


/* =========================================
   PROJECTS SECTION
========================================= */

const projectsHeading = document.querySelector(
    ".projects .section-heading"
);


if (projectsHeading) {

    gsap.from(projectsHeading, {

        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },

        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"

    });

}


/* PROJECT CARDS */

document.querySelectorAll(".project").forEach(project => {

    const preview = project.querySelector(
        ".project__preview"
    );

    const content = project.querySelector(
        ".project__content"
    );


    const contentElements = content
        ? content.querySelectorAll(
            ".project__number, .project__category, .project__title, .project__description, .project__tags, .project__links"
        )
        : [];


    const projectTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: project,
            start: "top 78%",
            toggleActions: "play none none reverse"
        }

    });


    projectTimeline

        .from(project, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        })

        .from(preview, {
            scale: 0.96,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")

        .from(contentElements, {
            y: 25,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.55");

});


/* =========================================
   SERVICES SECTION
========================================= */

const servicesHeading = document.querySelector(
    ".services .section-heading"
);


if (servicesHeading) {

    gsap.from(servicesHeading, {

        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },

        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"

    });

}


const services = document.querySelectorAll(
    ".service"
);


if (services.length) {

    gsap.from(services, {

        scrollTrigger: {
            trigger: ".services__list",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },

        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"

    });

}


/* =========================================
   ABOUT SECTION
========================================= */

const aboutContainer = document.querySelector(
    ".about__container"
);


if (aboutContainer) {

    gsap.from(aboutContainer.children, {

        scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },

        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"

    });

}


/* =========================================
   TOOLKIT SECTION
========================================= */

const builtWith = document.querySelector(
    ".built-with"
);


if (builtWith) {

    gsap.from(

        builtWith.querySelectorAll(
            ".section-heading, .built-with__item"
        ),

        {

            scrollTrigger: {
                trigger: builtWith,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },

            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out"

        }

    );

}


/* =========================================
   CONTACT SECTION
========================================= */

const contactContainer = document.querySelector(
    ".contact__container"
);


if (contactContainer) {

    gsap.from(contactContainer.children, {

        scrollTrigger: {
            trigger: ".contact",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },

        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"

    });

}


/* =========================================
   REFRESH SCROLLTRIGGER
========================================= */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});