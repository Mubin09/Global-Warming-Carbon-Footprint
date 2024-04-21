document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading animation when the content is fully loaded
    var loadingElement = document.getElementById("loading");
    loadingElement.style.display = "none";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

function calculate() {
window.location.href = "calculator.html";
}
