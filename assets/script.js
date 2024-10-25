feather.replace();

// Prüft, ob ein Element in den Sichtbereich kommt
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.1 });

// Ziel-Elemente auswählen und dem Observer hinzufügen
document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});
