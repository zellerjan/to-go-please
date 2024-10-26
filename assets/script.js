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

function changeImage() {
    const imgElement = document.getElementById("imgClickAndChange");

    // Check if the src ends with "To-Go-17.jpg"
    if (imgElement.src.endsWith("assets/img/To-Go-17.jpg")) {
        imgElement.src = "assets/img/To-Go-99.jpg";
    } else {
        imgElement.src = "assets/img/To-Go-17.jpg";
    }
}