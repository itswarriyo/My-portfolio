// ---------------Fade Section--------------------//
const sectionsfade = document.querySelectorAll(".fade-sectionplz");

const observerfade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showplz");
        }
    });
});

sectionsfade.forEach((section) => {
    observerfade.observe(section);
});
